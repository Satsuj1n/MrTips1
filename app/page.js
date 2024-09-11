import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Colecoes from "./components/Colecoes";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[url('/images/fundo_teste.png')]">
        <Navbar />
        <HeroSection />
        <div className="container mx-auto px-12 py-2 mt-12 ">
          <Colecoes />
          <AboutUs />
          <ProjectsSection />
          <Button />
        </div>
        <Footer />
      </main>
    </>
  );
}
