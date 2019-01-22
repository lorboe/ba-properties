
import React from "react";
import { Route, Link, NavLink } from "react-router-dom";


export default function Navbar() {
  
  return (
    <div>
      <nav>
       <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">BA Properties</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/countries">Buscar propiedades</NavLink></li>
        <li><NavLink to="/countries">Listar propriedad</NavLink></li>
        <li><NavLink to="/contact">Contacto</NavLink></li>
      </ul>
    </div>
  </nav>
    </div>
  )
}







