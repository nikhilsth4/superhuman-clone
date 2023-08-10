import Image from "next/image";
import TenMillion from "./TenMillion";
import juneChen from "public/june-chen.png";
import Container from "./Container";
import ScrollText from "./ScrollText";

const About = () => {
  return (
    <div className="text-center">
      <TenMillion />
      <Container className="mt-6">
        <Image
          src={juneChen}
          alt="June Chen"
          className="m-auto w-full h-auto max-w-[342px]"
        />
        <ScrollText />
      </Container>
    </div>
  );
};

export default About;
