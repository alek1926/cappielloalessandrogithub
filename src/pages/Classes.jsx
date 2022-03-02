import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
export default function Classes () {
    const {session, navigateRoute} = useAuth();
    let navigate = useNavigate();

    useEffect(() => {
        const isAuth = () => {
            if (session !== true) {
                navigate(navigateRoute);
            }
        }
        isAuth();
    }, [session,navigateRoute]);// eslint-disable-line react-hooks/exhaustive-deps
    return(
    <>
    <h1>classes</h1>
    <Link to="/repos">torna alla home</Link>
    </>
    );
}