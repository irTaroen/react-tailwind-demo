import Hero from "./Hero";
import Rockets from "./Rockets";
import Testimonials from "./Testimonials";

export default function Main() {
  return (
    <main className=" max-w-4xl mx-auto sm:scroll-smooth">
      <Hero />
      <Rockets />
      <Testimonials />
    </main>
  );
}
