import About from "@/components/About";
import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-900">
        <Hero />
        <div className="bg-gradient-to-b from-purple-950 to-slate-900">
          <Companies />
        </div>
        <div className="flex flex-col md:gap-36">
          <About />

          <Introduction />
          <Footer />
        </div>
      </div>
    </>
  );
}
