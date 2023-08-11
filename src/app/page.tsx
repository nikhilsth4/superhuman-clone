import About from "@/components/About";
import Companies from "@/components/Companies";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <About />
      <Introduction />
    </>
  );
}
