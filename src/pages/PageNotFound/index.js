import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export function PageNotFound() {

    return (
        <div className="pagenotfound-container-center">
            <h1 className="h1">404: Página não encontrada</h1>
            <Link to='/login' className='pagenotfound-btn'>
                VOLTAR PARA A PÁGINA
            </Link>
        </div>
    )
}