import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Pocetna
      </NavLink>
      <NavLink
        to="/statistikaTrenera"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Statistika trenera
      </NavLink>
      <NavLink
        to="/statistikaVezbaca"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Statistika Vezbaca
      </NavLink>
      <NavLink
        to="/dodajPaket"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Dodaj Paket
      </NavLink>
      <NavLink
        to="/obrisiPaket"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Obrisi paket
      </NavLink>
      <NavLink
        to="/odobrenjeClanarine"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Odobrenje canarinea
      </NavLink>
      <NavLink
        to="/dodajClana"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Dodaj clanaa
      </NavLink>
      <NavLink
        to="/profil"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Profil
      </NavLink>
      <NavLink
        to="/promenaLozinke"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Promena lozinke
      </NavLink>
      <NavLink
        to="/logout"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Izloguj se
      </NavLink>
    </nav>
  );
}

export default Navbar;
