// Basic MVP auth: admin dashboard sends this header on every request.
// Swap for real JWT auth before going to production.
module.exports = function adminAuth(req, res, next) {
  const key = req.headers["x-admin-key"];
  if (!key || key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};
