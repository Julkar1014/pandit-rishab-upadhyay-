import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOTP, verifyOTP } from "../services/auth";
import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async () => {
    try {
      setLoading(true);

      const res = await sendOTP(email);

      alert(res.message);

      setShowOTP(true);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      setLoading(true);

      const res = await verifyOTP(email, otp);

      localStorage.setItem("token", res.token);
      localStorage.setItem("admin", JSON.stringify(res.admin));

      navigate("/admin/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">
          🕉
        </div>

        <h1 className="login-title">
          Pandit Booking
        </h1>

        <p className="login-subtitle">
          Admin Panel Login
        </p>

        <div className="form-group">
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {!showOTP ? (
          <button
            className="login-btn"
            onClick={handleSendOTP}
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        ) : (
          <>
            <div className="form-group">
              <label>OTP</label>

              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <button
              className="login-btn"
              onClick={handleVerifyOTP}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        <div className="login-footer">
          Secure Admin Access
        </div>

      </div>
    </div>
  );
}