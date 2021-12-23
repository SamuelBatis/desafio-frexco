import React from "react";
import './home.modules.scss'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container">
            <h1 className="header"> Home </h1>
            <nav>
               <Link to='products'> <button className="btn">Products</button> </Link> 
               <br />
                <Link to='Stock'><button className="btn"> Stock </button></Link>
            </nav>
        </div>
    )
}