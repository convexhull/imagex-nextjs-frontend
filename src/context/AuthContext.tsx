"use client";
// Libs
import { createContext, useContext, useEffect, useState } from "react";
// Constants
import { ACCESS_TOKEN_VALIDITY_DURATION } from "@/lib/constants";
import { refreshAccessToken } from "@/services/auth/api";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContext = {
  //TODO: Types
  session: any;
  setSession: (session: any) => void;
};

export const AuthContext = createContext<AuthContext | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<any>();

  const autoRefresh = async () => {
    try {
      const session = await refreshAccessToken();
      setSession(session);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    autoRefresh();
    const intervalId = setInterval(
      () => autoRefresh(),
      ACCESS_TOKEN_VALIDITY_DURATION
    );
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  //TODO: Validation and error alerts
  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return {
    session: auth?.session,
    setSesssion: auth?.setSession,
  };
};

export default AuthProvider;

//TODO: ERROR HANDLING IN THIS FILE and TS !!!
