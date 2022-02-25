import { useState, useEffect, useContext } from "react";
import {LOGIN_PATH} from "../config/configAuth.js";
import { userContext } from "../context/userContext.js";


export const useAuth = () => {
    const user = useContext(userContext);

    const [session, setSession] = useState();
    const [navigateRoute, setNavigateRoute] = useState("");
    
    useEffect(() => {
        const isAuth = () => {
            setSession(user.session)
            session ? 
                setNavigateRoute("")
             : 
                setNavigateRoute(LOGIN_PATH);
            
        }
        isAuth();
    }, [session, navigateRoute]);
    return {session, navigateRoute};
}