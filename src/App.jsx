import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Speakers from "./components/Speakers";
import Sponsers from "./components/Sponsers";
import About from "./components/about";
import FAQ from "./components/faq";
import Gameday from "./components/gameday";
import OrgTeam from "./components/organizing";
import Schedules from "./components/schedule";

const App = () => {
  return (
    <div className="bg-[rgba(11, 19, 34, 1)]">
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Home />
        <About />
        <Speakers />
        <OrgTeam />
        <Schedules />
        <Gameday />
        <Sponsers />
        <FAQ />
        <Footer />
      </div>

      <ButtonGradient />
    </div>
  );
};

export default App;
