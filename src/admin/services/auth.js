import api from "./api";

export const sendOTP = async (email) => {
  const res = await api.post("/auth/send-otp", {
    email,
  });

  return res.data;
};

export const verifyOTP = async (email, otp) => {
  const res = await api.post("/auth/verify-otp", {
    email,
    otp,
  });

  return res.data;
};