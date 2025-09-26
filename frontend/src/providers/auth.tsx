import { createContext, useState , type ReactNode , type FC, useEffect } from "react";
import axios from "axios";

interface AuthProviderProps {
    children : ReactNode;
}

interface IUser {
    id : string;
    email : string;
    name : string;
}
export interface AuthContextType {
    user :  IUser| null;
    setUser : (user : IUser) => void;
    logout : () => void;
}
export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {

    const [user , setUser] = useState<IUser | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/auth/me", {
                    withCredentials: true
                });
                setUser(response.data.user);
            } catch (err) {
                console.log("User not authenticated:", err);
                setUser(null);
            }
        };

        checkAuth();
    }, []);

    const logout = async () => {
        try {
            await axios.post("http://localhost:8000/api/auth/logout", {}, {
                withCredentials: true
            });
            setUser(null);
        } catch (err) {
            console.log("Logout error:", err);
        }
    };

    return (
        <AuthContext.Provider value={{ user , setUser , logout }}>
            {children}
        </AuthContext.Provider>
    )
}