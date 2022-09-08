import { createContext } from "react";
import useAuthProvider, { IUserAutherProvider } from "./useAuthProvider";
export const AuthContext = createContext<IUserAutherProvider | null>(null);
interface Props {
    children: React.ReactNode;
  }
const AuthProvider: React.FC<Props> = ({ children }) => {
    const auth = useAuthProvider();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
export default AuthProvider