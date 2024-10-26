import React from "react";
import Logo from "./components/Logo";
import Search from "./components/Search";
import CardCount from "./components/CardCount";
import HamburgerMenu from "./components/HamburgerMenu";
import User from "./components/User";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 bg-orange-500 text-slate-100">
      <Logo />
      <Search />
      <CardCount />
      <User />
      <HamburgerMenu />
    </nav>
  );
}
