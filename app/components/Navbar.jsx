"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Sobre",
    path: "#aboutus",
  },
  {
    title: "Produtos",
    path: "#colecoes",
  },
  {
    title: "Modelos",
    path: "#projects",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-20 bg-gradient-to-r from-amber-800 from-0% via-amber-500 via-30% to-lime-400 to-100%">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-0 h-[90px]">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-[#834c24] font-semibold"
        >
          <img alt="logo" src="/images/logo.png" className="size-16" />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-[#834c24] text-[#834c24] hover:text-white "
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-[#834c24] text-[#834c24] hover:text-white "
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
