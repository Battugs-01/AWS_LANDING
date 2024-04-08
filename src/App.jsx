import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Home from "./components/Home";
import Speakers from "./components/Speakers";
import About from "./components/about";
import FAQ from "./components/faq";
import Schedules from "./components/schedule";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Home />
        <About />
        <Speakers />
        <Schedules />
        <FAQ />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
