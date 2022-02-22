import React from "react";
import { Link } from "react-router-dom";
export default function Notfound () {

    return(
    <>
    <div class="centra">
        <h1>Errore 404</h1>
    <Link to="/repos">torna alla home</Link></div>
    </>
    );
}