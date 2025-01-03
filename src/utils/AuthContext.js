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
  const logoutAfterDays = process.env.NEXT_PUBLIC_LOGOUT_AFTER_DAYS || 7;

  const verifyAuth = () => {
    const verify = AuthVerify();
    setIsVerified(verify);

    if (verify) {
      const loginTimestamp = new Date().getTime();
      localStorage.setItem("loginTimestamp", loginTimestamp);
    }
  };

  const clearAllCookies = () => {
    const cookies = document.cookie.split("; ");
    cookies.forEach(cookie => {
      const [name] = cookie.split("=");
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loginTimestamp");
    disconnect();
    setIsVerified(false);
    clearAllCookies();
    navigate.push("/");
  };

  useEffect(() => {
    verifyAuth();

    const checkLogout = () => {
      const loginTimestamp = localStorage.getItem("loginTimestamp");
      if (loginTimestamp) {
        const elapsedTime = new Date().getTime() - Number(loginTimestamp);
        const logoutTime = logoutAfterDays * 24 * 60 * 60 * 1000;

        if (elapsedTime >= logoutTime) {
          logout();
        }
      }
    };

    const interval = setInterval(checkLogout, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthContext.Provider value={{ isVerified, verifyAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
