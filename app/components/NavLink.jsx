import React from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#bfee4a] sm:text-xl rounded md:p-0 hover:text-[#c8ff3d] font-bold drop-shadow-[0_2.10px_2.10px_rgba(131,76,36,1)]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
