"use client";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#be703f]">
      <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center order-2"
          aria-label="Footer"
        >
          <div className="px-5">
            <a
              href="#"
              className="text-base text-[#c5ff3f] hover:text-[#add64b]"
            >
              Todos direitos reservados.
            </a>
          </div>
        </nav>
        <div className="mt-8 md:mb-8 flex justify-center space-x-6 md:order-3">
          <div className="flex flex-row flex-nowrap items-center">
            <a
              href="https://wa.me/message/YNQCDX67BOR6N1"
              className="text-[#c5ff3f] hover:text-[#add64b] flex items-center"
            >
              <FaWhatsapp className="text-2xl" />{" "}
              {/* Ensuring consistent icon size */}
              <h3 className="text-md ml-2">(61) 99817-2801</h3>{" "}
              {/* Set consistent font size */}
            </a>
          </div>
          <div className="flex flex-row flex-nowrap items-center">
            <a
              href="https://www.instagram.com/mrtipsbr/"
              className="text-[#c5ff3f] hover:text-[#add64b] flex items-center"
            >
              <FaInstagram className="text-2xl" />{" "}
              {/* Ensuring consistent icon size */}
              <h3 className="text-md ml-2">@mrtipsbr</h3>{" "}
              {/* Set consistent font size */}
            </a>
          </div>
        </div>

        <div className="mt-8  md:order-1 md:mt-0">
          <p className="text-center text-base text-[#c5ff3f]">
            &copy; Mr. Tips Website.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
