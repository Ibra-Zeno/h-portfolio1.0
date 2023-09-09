import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Layout>
        <NavBar />
        <Hero />
        <Carousel />
      </Layout>
    </>
  );
}
