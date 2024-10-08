"use client";
import React, { useState, useEffect } from "react";

const AboutUs = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  // Verifica o tamanho da tela quando o componente é montado
  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 640); // Define "small device" para telas menores que 640px (ponto de interrupção sm)
    };

    // Define o tamanho inicial da tela
    handleResize();

    // Adiciona o event listener para redimensionamento
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <div className="sm:flex items-center max-w-screen-xl mt-12">
        {/* Exibe a imagem somente se não for um dispositivo pequeno */}
        {!isSmallDevice && (
          <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center">
              <img
                src="https://i.imgur.com/g4YCIJo.png"
                alt="Mr.Tips"
                className="rounded-xl shadow-lg w-full h-full object-cover object-center transition duration-200 hover:scale-110"
              />
            </div>
          </div>
        )}
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-white border-b-2 border-[#a6d232] font-bold">
              Um pouco da nossa História
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              Sobre{" "}
              <span className="text-[#a6d232] drop-shadow-[0_1.8px_1.8px_rgba(139,69,19,1)]">
                a Mr. Tips
              </span>
            </h2>
            <p className="text-white">
              A Mr. Tips nasceu da paixão por piteiras de vidro e se tornou
              referência em designs únicos e qualidade excepcional. Atendemos
              tanto o varejo quanto o atacado, trabalhamos para grandes marcas e
              lojistas com produtos de altíssima qualidade. De artesãos locais a
              entusiastas internacionais, nossa loja une uma comunidade de
              apreciadores de arte em vidro. Com uma ampla variedade de
              piteiras, desde os modelos clássicos até criações personalizadas,
              oferecemos sofisticação e estilo para todos os gostos. Nossa
              história é marcada pela dedicação à excelência e ao serviço
              impecável, estabelecendo conexões entre amantes de piteiras e
              parceiros comerciais ao redor do mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
