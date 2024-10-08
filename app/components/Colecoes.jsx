"use client";

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Coleções = () => {
  return (
    <section id="colecoes">
      <div className="py-2 sm:py-2 lg:py-5">
        <h1 className=" flex justify-center items-center text-center text-5xl font-bold text-[#a6d232] drop-shadow-[0_1.8px_1.8px_rgba(139,69,19,1)] sm:mb-6">
          Conheça Nossos Produtos
        </h1>
        <h4 className="flex justify-center items-center text-center font-bold text-[#a6d232] drop-shadow-[0_1.8px_1.8px_rgba(139,69,19,1)] sm:mb-6 pt-2">
          Artigos manufaturados produzidos com os melhores vidros disponíveis no
          mercado
        </h4>
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {/*<!-- image - start -->*/}
            <a
              href="https://wa.me/message/YNQCDX67BOR6N1"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://i.imgur.com/IiwhNN3.jpeg"
                loading="lazy"
                alt="Mr.Tips"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
            </a>
            {/*<!-- image - end -->*/}

            {/*<!-- image - start -->*/}
            <a
              href="https://wa.me/message/YNQCDX67BOR6N1"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://i.imgur.com/pcGmVnv.jpeg"
                loading="lazy"
                alt="Mr.Tips2"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
            </a>
            {/*<!-- image - end -->*/}

            {/*<!-- image - start -->*/}
            <a
              href="https://wa.me/message/YNQCDX67BOR6N1"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://i.imgur.com/HniLAbW.jpeg"
                loading="lazy"
                alt="Mr.Tips3"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
            </a>
            {/*<!-- image - end -->*/}

            {/*<!-- image - start -->*/}
            <a
              href="https://wa.me/message/YNQCDX67BOR6N1"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://i.imgur.com/HkluYHa.jpeg"
                loading="lazy"
                alt="Mr.Tips4"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span
                className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"
                id="aboutus"
              ></span>
            </a>
            {/*<!-- image - end -->*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coleções;
