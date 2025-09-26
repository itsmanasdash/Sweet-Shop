import { useContext } from 'react';
import { type AuthContextType, AuthContext } from '../providers/auth';

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export default AuthContext;