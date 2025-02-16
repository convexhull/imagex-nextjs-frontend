"use client";
// Libs
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// Constants
import { ACCESS_TOKEN_VALIDITY_DURATION } from "@/lib/constants";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContext = {
  login: (email: string, password: string) => void;
  accessToken: string;
  logout: () => void;
};

export const AuthContext = createContext<AuthContext | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string>("");
  //TODO: Validations
  const login = async (email: string, password: string) => {
    const res = await fetch("http://localhost:4000/users/login", {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    });
    if (!res.ok) {
      //TODO: Alert
    } else {
      const data = await res.json();
      setAccessToken(data.token);
      router.push("/");
    }
  };

  useEffect(() => {
    autoRefresh();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      autoRefresh();
    }, ACCESS_TOKEN_VALIDITY_DURATION - 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const autoRefresh = async () => {
    const res = await fetch("http://localhost:4000/users/refresh", {
      cache: "no-store",
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) {
    } else {
      const data = await res.json();
      setAccessToken(data.data.accessToken);
    }
  };

  const logout = async () => {
    const res = await fetch("http://localhost:4000/users/logout", {
      cache: "no-store",
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) {
    } else {
      setAccessToken("");
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

//TODO: ERROR HANDLING IN THIS FILE and TS !!!
