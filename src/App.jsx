import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="m-0 p-0 box-border">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
