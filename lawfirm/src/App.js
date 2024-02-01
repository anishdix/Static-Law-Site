import styles from "./App.module.css"
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero.jsx"
import Introduction from "./components/Introduction/Introduction.jsx";
import ChooseUs from "./components/ChooseUs/ChooseUs.jsx";
import Area from "./components/Area/Area.jsx";
import HappyClients from "./components/HappyCLients/HappyClients.jsx";
import OurTeam from "./components/OurTeam/OurTeam.jsx";
import Faq from "./components/Faq/Faq.jsx";
import NewsLetter from "./components/NewsLetter/NewsLetter.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <>
    <div className={styles.main}>
      <Navbar/>
      <Hero/>
    </div>

    <div className={styles.secondary}>
      <Introduction/>
      <ChooseUs/>
      <Area/>
      <HappyClients/>
      <OurTeam/>
      <Faq/>
      <NewsLetter/>
    </div>
    <div className={styles.footer}>
      <Footer/>
    </div>
    </>
  );
}

export default App;
