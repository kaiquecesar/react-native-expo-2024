import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const Role = {
    SUPER: "SUPER",
    ADM: "ADM",
    USER: "USER"
}

export function AuthProvider({children}) {
    const [user, setUser] = useState ({
        autenticated: null,
        user: null,
        role: null,
    });

    const singIn = async ({email, password}) => {

        if (email === "super@email.com" && password === "Super123!") {
            setUser ({id: 1, name: "Super", email, role: "SUPER" })
        }

        if (email === "adm@email.com" && password === "Adm123!") {
            setUser ({id: 2, name: "Adm", email, role: "ADM" })
        }

        if (email === "user@email.com" && password === "User123!") {
            setUser ({id: 3, name: "User", email, role: "USER" })
        }
    };

    const singOut = async () => {
        setUser({});
    };

    useEffect (() => {
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