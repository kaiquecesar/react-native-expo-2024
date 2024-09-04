import { createContext, useContext, useEffect, useState } from "react";
import { useUserDatabase } from "../../database/useUserDatabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, Text, View } from "react-native";

const AuthContext = createContext({});

export const Role = {
  SUPER: "SUPER",
  ADM: "ADM",
  USER: "USER",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    autenticated: null,
    user: null,
    role: null,
  });

  const { authUser } = useUserDatabase();

  useEffect(() => {
    const loadStoragedData = async () => {
      const storagedUser = await AsyncStorage.getItem("@payment:user");

      if (storagedUser) {
        setUser({
          autenticated: true,
          user: JSON.parse(storagedUser),
          role: JSON.parse(storagedUser).role,
        });
      } else {
        setUser({
          autenticated: false,
          user: null,
          role: null,
        });
      }
    };

    loadStoragedData();
  }, []);

  const singIn = async ({ email, password }) => {
    const response = await authUser({ email, password });
    if (!response) {
      setUser({
        autenticated: false,
        user: null,
        role: null,
      });
      throw new Error("Usuário ou senha inválidos");
    }

    await AsyncStorage.setItem("@payment:user", JSON.stringify(response));

    setUser({
      autenticated: true,
      user: response,
      role: response.role,
    });
  };

  const singOut = async () => {
    await AsyncStorage.removeItem("@payment:user");
    setUser({ autenticated: false, user: null, role: null });
  };

  return (
    <AuthContext.Provider value={{ user, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be within an AuthProvider");
  }
  return context;
}
