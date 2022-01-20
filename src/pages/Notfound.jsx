import React from "react";
import { Link } from "react-router-dom";
export default function Notfound () {

    return(
    <>
    <h1>Not found</h1>
    <Link to="/repos">torna alla home</Link>
    </>
    );
}