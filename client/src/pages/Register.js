import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { useAuth } from "../context/AuthContext";

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

const fieldClass =
  "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm";
const labelClass = "block mb-3 font-semibold text-sm";

export default function Register() {
  const [form, setForm] = useState(initialState);
  const [photo, setPhoto] = useState(null);
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { token } = useAuth();

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
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/success");
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto px-5 py-10">
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-maroon text-2xl mb-4">Register for the Reunion</h2>
        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label className={labelClass}>
            Full Name *
            <input name="name" value={form.name} onChange={handleChange} required className={fieldClass} />
          </label>
          <label className={labelClass}>
            Father's Name
            <input name="fatherName" value={form.fatherName} onChange={handleChange} className={fieldClass} />
          </label>
          <label className={labelClass}>
            Department *
            <input name="department" value={form.department} onChange={handleChange} required className={fieldClass} />
          </label>
          <label className={labelClass}>
            Passing Year *
            <input name="passingYear" value={form.passingYear} onChange={handleChange} required className={fieldClass} />
          </label>
          <label className={labelClass}>
            Phone Number *
            <input name="phone" value={form.phone} onChange={handleChange} required className={fieldClass} />
          </label>
          <label className={labelClass}>
            Email Address
            <input type="email" name="email" value={form.email} onChange={handleChange} className={fieldClass} />
          </label>
          <label className={labelClass}>
            Current Profession
            <input name="profession" value={form.profession} onChange={handleChange} className={fieldClass} />
          </label>
          <label className={labelClass}>
            Address
            <textarea name="address" value={form.address} onChange={handleChange} className={fieldClass} />
          </label>
          <label className={labelClass}>
            Profile Photo
            <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} className="mt-1 text-sm" />
          </label>

          <hr className="my-4 border-gray-200" />

          <label className={labelClass}>
            Payment Method *
            <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} className={fieldClass}>
              <option value="bkash">bKash</option>
              <option value="nagad">Nagad</option>
              <option value="rocket">Rocket</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </label>
          <label className={labelClass}>
            Transaction ID *
            <input name="transactionId" value={form.transactionId} onChange={handleChange} required className={fieldClass} />
          </label>
          <label className={labelClass}>
            Payment Screenshot
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPaymentScreenshot(e.target.files[0])}
              className="mt-1 text-sm"
            />
          </label>

          <button
            className="w-full bg-maroon text-white font-semibold text-sm py-2.5 rounded-md hover:bg-maroon-dark disabled:opacity-60 mt-2"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>
        </form>
      </div>
    </div>
  );
}