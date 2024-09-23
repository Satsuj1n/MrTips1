"use client";
import React, { useEffect, useRef, useState } from "react";
import MrTips from "../../public/images/MrTips.mp4";

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  // Estado e lógica para alternar os textos
  const [currentH3, setCurrentH3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentH3((prevH3) => (prevH3 + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            className="min-w-full min-h-full absolute object-cover"
            src="/images/MrTips.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        <div className="video-content space-y-2 z-10">
          <h1 className="font-bold text-5xl text-[#a6d232] drop-shadow-[0_1.8px_1.8px_rgba(139,69,19,1)]">Mr.Tips</h1>
          <div className="block animate-text-slide leading-tight">
            <h3
              className={`lg:text-xl text-[#a6d232] drop-shadow-[0_1.8px_1.8px_rgba(139,69,19,1)] ${
                currentH3 === 0 ? "block" : "hidden"
              }`}
            >
              Especialistas em Piteiras de Vidro
            </h3>
            <h3
              className={`lg:text-xl text-[#a6d232] drop-shadow-[0_1.8px_1.8px_rgba(139,69,19,1)] ${
                currentH3 === 1 ? "block" : "hidden"
              }`}
            >
              Adquira em Varejo ou Atacado
            </h3>
            <h3
              className={`lg:text-xl text-[#a6d232] drop-shadow-[0_1.8px_1.8px_rgba(139,69,19,1)] ${
                currentH3 === 2 ? "block" : "hidden"
              }`}
            >
              Reduza os Danos da sua Sessão
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
