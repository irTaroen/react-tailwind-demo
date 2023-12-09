import Hero from "./Hero";
import Rockets from "./Rockets";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";

export default function MainAcme() {
  return (
    <main className="mx-auto sm:scroll-smooth">
      <Header />
      <Hero />
      <Rockets />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
