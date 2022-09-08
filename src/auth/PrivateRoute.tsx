import { Navigate, useLocation,RouteProps,Route } from "react-router-dom";
import useAuth from "./useAuth";
interface Props {
    children: React.ReactNode;
  }
  
interface PrivateRouteProps extends RouteProps {}
export const PrivateRoute :  React.FC<Props> = ({ children }) => {
    const auth = useAuth();
    const location = useLocation()
    if (!auth?.user) {
        return  <Navigate to="/login" replace /> 
    }
    return (
        <>
        {children} 
      </>
      )
}
export default PrivateRoute