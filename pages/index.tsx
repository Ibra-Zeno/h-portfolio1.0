import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import About from "../components/AboutMe";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <Layout>
        <NavBar />
        <Hero />
        <About />
        <Gallery />
        <LogoCarousel />
        <Timeline />
        <Carousel />
        <Footer />
      </Layout>
    </>
  );
}
