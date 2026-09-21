import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Affiliation from "./components/sections/Affiliation";
import Services from "./components/sections/Services";
import DueDiligence from "./components/sections/DueDiligence";
import Founders from "./components/sections/Founders";
import Process from "./components/sections/Process";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen text-[#0f172a] bg-[#f8fafc] overflow-x-hidden selection:bg-[#047857]/15 selection:text-[#047857]"
      style={{
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <Affiliation />
        <Services />
        <DueDiligence />
        <Founders />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
