import React, { createContext, ReactNode, useContext, useState } from "react";

// 1️⃣ Tipo do usuário
type User = {
    email: string;
} | null;

// 2️⃣ Tipo do contexto de autenticação
type AuthContextType = {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
};

// 3️⃣ Criação do contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 4️⃣ Provider
type AuthProviderProps = { children: ReactNode };

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User>(null);

    // Simulação de login
    const signIn = async (email: string, password: string) => {
        // Aqui você pode integrar com API real de login
        // await api.post("/login", { email, password });
        setUser({ email });
    };

    const signOut = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

// 5️⃣ Hook personalizado para usar o contexto
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth deve ser usado dentro do AuthProvider");
    return context;
};
