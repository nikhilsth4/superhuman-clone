import Companies from "@/components/Companies";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TenMillion from "@/components/TenMillion";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <TenMillion />
    </>
  );
}
