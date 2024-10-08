"use client";
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { products } from "./data"; // Importe os dados dos produtos

const divStyle = {
  backgroundSize: "cover",
  height: "320px",
  width: "100%",
  backgroundPosition: "center",
  borderRadius: "10px 10px 0 0",
};

const ProjectsSection = () => {
  const [visibleInfo, setVisibleInfo] = useState(null); // Estado para o item que deve mostrar informações

  const handleTouchStart = (id) => {
    if (visibleInfo === id) {
      setVisibleInfo(null); // Ocultar informações se já estiverem visíveis
    } else {
      setVisibleInfo(id); // Mostrar informações para o item clicado
    }
  };

  const handleMouseEnter = (id) => {
    setVisibleInfo(id);
  };

  const handleMouseLeave = () => {
    setVisibleInfo(null);
  };

  return (
    <>
      <h1
        className="flex justify-center items-center text-5xl font-bold text-[#a6d232] drop-shadow-[0_1.8px_1.8px_rgba(139,69,19,1)] mt-6"
        id="projects"
      >
        Modelos
      </h1>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-12 mb-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="group w-72 bg-[#A4D434] shadow-xl scale-100 rounded-xl duration-500 hover:scale-105"
            onTouchStart={() => handleTouchStart(product.id)} // Usar onTouchStart para dispositivos móveis
            onMouseEnter={() => handleMouseEnter(product.id)} // Usar onMouseEnter para desktop
            onMouseLeave={handleMouseLeave} // Usar onMouseLeave para desktop
          >
            <Slide className="rounded-xl" autoplay={false}>
              {product.images.map((slideImage, index) => (
                <div
                  key={index}
                  className="h-80 w-72 object-cover rounded-t-xl"
                >
                  <div
                    style={{
                      ...divStyle,
                      backgroundImage: `url(${slideImage.url})`,
                    }}
                  ></div>
                </div>
              ))}
            </Slide>
            <div className="px-4 py-3 w-72">
              <span className="text-[#572d15b6] mr-3 uppercase text-xs font-bold">
                Mr.Tips
              </span>
              <p className="text-lg font-bold text-[#572d15] truncate block capitalize">
                {product.title}
              </p>
              <ul>
                <li className={`text-[#572d15] font-bold text-xs`}>
                  Técnica: {product.techniques}
                  <br />
                  {product.bodyColor} <br />
                  {product.thickness} <br />
                </li>
              </ul>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProjectsSection;
