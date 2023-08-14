import Image from "next/image";
import TenMillion from "./TenMillion";
import juneChen from "public/june-chen.png";
import Container from "./Container";
import ScrollText from "./ScrollText";

const About = () => {
  return (
    <div className="text-center">
      <TenMillion />
      <Container className="mt-6 md:flex md:items-center md:gap-6 lg:mt-36">
        <Image
          src={juneChen}
          alt="June Chen"
          className="m-auto w-full h-auto max-w-[342px] md:basis-1/2 md:max-w-auto md:mr-0 lg:max-w-[600px]"
        />
        <ScrollText className="md:basis-1/2 md:text-left " />
      </Container>
    </div>
  );
};

export default About;
