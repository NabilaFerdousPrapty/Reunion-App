const express = require("express");
const QRCode = require("qrcode");
const path = require("path");
const fs = require("fs");
const Registrant = require("../models/Registrant");
const adminAuth = require("../middleware/adminAuth");
const upload = require("../middleware/upload");

const router = express.Router();

// ---------- PUBLIC: submit registration ----------
router.post(
  "/",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "paymentScreenshot", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        name,
        fatherName,
        department,
        passingYear,
        phone,
        email,
        profession,
        address,
        paymentMethod,
        transactionId,
        amount,
      } = req.body;

      if (!name || !department || !passingYear || !phone || !paymentMethod || !transactionId) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const photoUrl = req.files?.photo?.[0]
        ? `/uploads/${req.files.photo[0].filename}`
        : undefined;
      const paymentScreenshotUrl = req.files?.paymentScreenshot?.[0]
        ? `/uploads/${req.files.paymentScreenshot[0].filename}`
        : undefined;

      const registrant = await Registrant.create({
        name,
        fatherName,
        department,
        passingYear,
        phone,
        email,
        profession,
        address,
        photoUrl,
        paymentMethod,
        transactionId,
        amount: amount || 900,
        paymentScreenshotUrl,
      });

      res.status(201).json({ message: "Registration submitted", registrant });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error", details: err.message });
    }
  }
);

// ---------- ADMIN: list all registrants ----------
router.get("/", adminAuth, async (req, res) => {
  const registrants = await Registrant.find().sort({ createdAt: -1 });
  res.json(registrants);
});

// ---------- ADMIN: approve a registrant, generate alumni ID + QR ----------
router.patch("/:id/approve", adminAuth, async (req, res) => {
  try {
    const registrant = await Registrant.findById(req.params.id);
    if (!registrant) return res.status(404).json({ error: "Not found" });

    if (!registrant.alumniId) {
      const shortYear = registrant.passingYear.toString().slice(-4);
      const count = await Registrant.countDocuments({ paymentStatus: "approved" });
      registrant.alumniId = `RA${shortYear}-${String(count + 1).padStart(4, "0")}`;
    }
    registrant.paymentStatus = "approved";

    // Generate QR code that links to the public verification page
    const verifyUrl = `${process.env.CLIENT_URL}/verify/${registrant.alumniId}`;
    const qrDir = path.join(__dirname, "..", "uploads", "qrcodes");
    if (!fs.existsSync(qrDir)) fs.mkdirSync(qrDir, { recursive: true });
    const qrFilename = `${registrant.alumniId}.png`;
    await QRCode.toFile(path.join(qrDir, qrFilename), verifyUrl);
    registrant.qrCodeUrl = `/uploads/qrcodes/${qrFilename}`;

    await registrant.save();
    res.json({ message: "Approved", registrant });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// ---------- ADMIN: reject a registrant ----------
router.patch("/:id/reject", adminAuth, async (req, res) => {
  const registrant = await Registrant.findByIdAndUpdate(
    req.params.id,
    { paymentStatus: "rejected" },
    { new: true }
  );
  if (!registrant) return res.status(404).json({ error: "Not found" });
  res.json({ message: "Rejected", registrant });
});

// ---------- PUBLIC: verify by alumni ID (for QR scan) ----------
router.get("/verify/:alumniId", async (req, res) => {
  const registrant = await Registrant.findOne({
    alumniId: req.params.alumniId,
    paymentStatus: "approved",
  }).select("name department passingYear alumniId photoUrl");

  if (!registrant) return res.status(404).json({ error: "Not found or not approved" });
  res.json(registrant);
});

module.exports = router;
