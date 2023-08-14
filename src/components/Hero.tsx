import React from "react";
import Button from "./Button";
import Container from "./Container";
import Image from "next/image";
import wolfMobile from "../../public/wolf-mobile.png";
import lightHouse from "../../public/light-house.png";

const Hero = () => {
  return (
    <div className="pt-20 text-center bg-gradient-to-b from-black to-purple-900 md:bg-gradient-to-bl md:from-50%">
      <Container>
        <h1 className="text-center text-3xl font-semibold my-8 leading-relaxed md:text-5xl md:font-medium lg:text-7xl lg:leading-normal lg:mt-16">
          The Fastest Email <br /> Experience Ever Made
        </h1>
        <p className="text-lg leading-loose font-medium mt-4 pb-10 md:text-xl md:pt-10 md:pb-16 lg:text-3xl lg:leading-relaxed lg:my-8">
          Blazingly fast, delightful and stress free. <br /> Get 3 hours back
          every single week
        </p>
        <Button
          name="Get Started"
          className="py-2.5 mb-20 max-w-sm md:mb-30 md:py-4 md:text-md md:max-w-[136px] lg:max-w-[290px] lg:py-6 lg:text-xl"
        />

        <div className="relative m-auto max-w-[26rem] md:hidden">
          <Image
            src={wolfMobile}
            alt="pic"
            className="m-auto w-[380px] relative right-5 md:w-[500px] lg:w-[700px] xl:w-[900px]"
          />
          <Image
            className="absolute w-24 bottom-0 right-0 "
            src={lightHouse}
            
            alt="pic"
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
