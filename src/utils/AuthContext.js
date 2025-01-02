import { AuthVerify } from "@/utils/auth.utils";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { useDisconnect } from "wagmi";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useRouter();
  const { disconnect } = useDisconnect();

  const verifyAuth = () => {
    const verify = AuthVerify();
    setIsVerified(verify);
  };
  const clearAllCookies = () => {
    const cookies = document.cookie.split("; ");
    cookies.forEach(cookie => {
      const [name] = cookie.split("=");
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
    // console.log("All cookies have been cleared!");
  };

  const logout = () => {
    localStorage.removeItem("user");
    disconnect();
    setIsVerified(false);
    clearAllCookies()
    navigate.push("/");
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
