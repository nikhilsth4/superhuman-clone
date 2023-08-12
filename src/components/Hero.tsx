import React from "react";
import Button from "./Button";
import Container from "./Container";
import Image from "next/image";
import wolfMobile from "../../public/wolf-mobile.png";
import lightHouse from "../../public/light-house.png";

const Hero = () => {
  return (
    <div className="pt-20 text-center">
      <Container>
        <h1 className="text-center text-3xl font-semibold my-8 leading-relaxed">
          The Fastest Email <br /> Experience Ever Made
        </h1>
        <p className="text-lg leading-loose font-medium mt-4 pb-10">
          Blazingly fast, delightful and stress free. <br /> Get 3 hours back
          every single week
        </p>
        <Button name="Get Started" className="py-2.5 mb-20 max-w-sm" />

        <div className="relative m-auto max-w-[26rem]">
          <Image
            src={wolfMobile}
            width={380}
            height={22}
            alt="pic"
            className="m-auto relative right-5 mw-100"
          />
          <Image
            className="absolute bottom-0 right-0 mw-100"
            src={lightHouse}
            width={100}
            height={22}
            alt="pic"
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
