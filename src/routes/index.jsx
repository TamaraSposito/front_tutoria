import { BrowserRouter } from "react-router-dom";
import { useAuthUser} from "../hooks/authhooks.js";
import { AuthRoutes } from "./auth.routes";
import { AppLayout } from "../components/layout"
import {AppRoutes} from "./app.routes.jsx";
export function Routes(){
    const { isAuthenticated } = useAuthUser();
    return(
        <BrowserRouter>
            { isAuthenticated ?
                (<AppLayout >
                    <AppRoutes />
                 </AppLayout>)
                             : <AuthRoutes />
            }
        </BrowserRouter>
    )
};