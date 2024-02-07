import { useEffect, useState, ReactNode } from "react";
import { FunctionComponent } from "react";
import { AuthContext } from "./context/AuthContext";
import firebase from "firebase/app";
import { auth } from "../firebaseSetup";
import { User } from "firebase/auth";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FunctionComponent<AuthProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser: User | null) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
