const mongoose = require("mongoose");

const registrantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    fatherName: { type: String },
    department: { type: String, required: true },
    passingYear: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    profession: { type: String },
    address: { type: String },
    photoUrl: { type: String },

    paymentMethod: { type: String, enum: ["bkash", "nagad", "rocket", "bank"], required: true },
    transactionId: { type: String, required: true },
    amount: { type: Number, default: 900 },
    paymentScreenshotUrl: { type: String },

    paymentStatus: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    alumniId: { type: String, unique: true, sparse: true }, // set on approval
    qrCodeUrl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Registrant", registrantSchema);
