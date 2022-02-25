import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
export default function Users () {
    const {session, navigateRoute} = useAuth();

    let navigate = useNavigate();

    useEffect(() => {
        const isAuth = () => {
            if (session !== true) {
                navigate(navigateRoute);
            }
        }
        isAuth();
    }, [session,navigateRoute]);
    return(
    <>
    <h1>users</h1>
    <Link to="/repos">torna alla home</Link>
    </>
    );
}