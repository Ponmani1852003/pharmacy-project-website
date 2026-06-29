import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import ProductSection from "../components/ProductSection/ProductSection";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Reviews from "../components/Reviews/Reviews";
import About from "../components/About/About";
import Partners from "../components/Partners/Partners";
import AlphabetSearch from "../components/AlphabetSearch/AlphabetSearch";
import Categories from "../components/Categories/Categories";
import Blog from "../components/Blog/Blog";

function Home() {
  return (
    <>

      <Hero />
      <ProductSection />
      <HowItWorks/>
      <Reviews/>
      <Partners/>
      <About/>
      <AlphabetSearch/>
      <Categories/>
      <Blog/>

    </>
  );
}

export default Home;