import About from "@/components/About";
import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <Hero />
      <Companies />
      <About />
      <Introduction />
      <Footer />
    </div>
  );
}
