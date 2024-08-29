import { createContext, useContext, useEffect, useState } from "react";
import { useUserDatabase } from "../../database/useUserDatabase";

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

  const singIn = async ({ email, password }) => {
    const response = await authUser({ email, password });
    console.log(!response)
    

    if (!response) {
      setUser({
        autenticated: false,
        user: null,
        role: null,
      });
      throw new Error ("Usuário ou senha inválidos");
    }

    console.log(!response);

    setUser({
      autenticated: true,
      user: response,
      role: response.role,
    });
  };

  const singOut = async () => {
    setUser({});
  };

  useEffect(() => {
    console.log("AuthProvider: ", user);
  }, [user]);

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
