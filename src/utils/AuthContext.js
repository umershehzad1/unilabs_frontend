import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthVerify } from "@/utils/auth.utils";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useRouter();

  const verifyAuth = () => {
    const verify = AuthVerify();
    setIsVerified(verify);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsVerified(false);
    navigate.push("/login");
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isVerified, verifyAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
