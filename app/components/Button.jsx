import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Button = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12 mb-12">
      <a href="https://wa.me/message/YNQCDX67BOR6N1">
        <button className="flex justify-center items-center bg-[#A4D434] text-[#572d15] font-bold py-6 px-32 rounded-xl shadow-green hover:text-white">
          Quero Adquirir!
        </button>
      </a>
    </div>
  );
};

export default Button;
