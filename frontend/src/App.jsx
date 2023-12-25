import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import "./index.css";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Contact />
      <Team />
      <Footer />
    </>
  );
}

export default App;
