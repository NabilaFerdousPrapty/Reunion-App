import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

const initialState = {
  name: "",
  fatherName: "",
  department: "",
  passingYear: "",
  phone: "",
  email: "",
  profession: "",
  address: "",
  paymentMethod: "bkash",
  transactionId: "",
};

export default function Register() {
  const [form, setForm] = useState(initialState);
  const [photo, setPhoto] = useState(null);
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = new FormData();
      Object.entries(form).forEach(([key, value]) => data.append(key, value));
      data.append("amount", 900);
      if (photo) data.append("photo", photo);
      if (paymentScreenshot) data.append("paymentScreenshot", paymentScreenshot);

      await api.post("/registrants", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      navigate("/success");
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Register for the Reunion</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Full Name *
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Father's Name
            <input name="fatherName" value={form.fatherName} onChange={handleChange} />
          </label>
          <label>
            Department *
            <input name="department" value={form.department} onChange={handleChange} required />
          </label>
          <label>
            Passing Year *
            <input name="passingYear" value={form.passingYear} onChange={handleChange} required />
          </label>
          <label>
            Phone Number *
            <input name="phone" value={form.phone} onChange={handleChange} required />
          </label>
          <label>
            Email Address
            <input type="email" name="email" value={form.email} onChange={handleChange} />
          </label>
          <label>
            Current Profession
            <input name="profession" value={form.profession} onChange={handleChange} />
          </label>
          <label>
            Address
            <textarea name="address" value={form.address} onChange={handleChange} />
          </label>
          <label>
            Profile Photo
            <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
          </label>

          <hr />

          <label>
            Payment Method *
            <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
              <option value="bkash">bKash</option>
              <option value="nagad">Nagad</option>
              <option value="rocket">Rocket</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </label>
          <label>
            Transaction ID *
            <input name="transactionId" value={form.transactionId} onChange={handleChange} required />
          </label>
          <label>
            Payment Screenshot
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPaymentScreenshot(e.target.files[0])}
            />
          </label>

          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Registration"}
          </button>
        </form>
      </div>
    </div>
  );
}
