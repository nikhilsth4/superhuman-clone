import React from "react";
import Container from "./Container";
import HeadingText from "./HeadingText";
import Link from "next/link";
import Image from "next/image";
import sLogo from "../../public/logo.svg";
import twitter from "../../public/twitter-logo.svg";
import linkedIn from "../../public/linkedin.svg";
import tiktok from "../../public/tiktok-logo.svg";
import youtube from "../../public/youtube-logo.svg";

const FooterContent = ({
  heading,
  links,
}: {
  heading: string;
  links: string[];
}) => {
  return (
    <div>
      <h3 className="font-medium">{heading}</h3>
      <div className="flex flex-col mt-4">
        {links.map((link, index) => (
          <Link
            href="#"
            key={index}
            className="mt-2 opacity-80 hover:opacity-100"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-24 mt-16 md:gap-8 md:justify-between lg:w-100">
        <HeadingText>
          The Fastest <br />
          Email Experience <br />
          Ever Made
        </HeadingText>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-12">
          <FooterContent
            heading="Company"
            links={["Blog", "Careers", "Love"]}
          />
          <FooterContent
            heading="Product"
            links={["Pricing", "Enterprise", "Download"]}
          />
          <FooterContent
            heading="Support"
            links={["Help", "Contact Us", "Love"]}
          />
          <FooterContent heading="Legal" links={["Privacy", "Terms"]} />
        </div>
      </div>

      <hr className="my-20" />
      <Image src={sLogo} alt="Logo" className="mt-10" />
      <div className="flex gap-12 pb-8">
        <Image
          src={twitter}
          alt="Logo"
          className="mt-10 cursor-pointer hover:opacity-80"
        />
        <Image
          src={linkedIn}
          alt="Logo"
          className="mt-10 cursor-pointer hover:opacity-80"
        />
        <Image
          src={tiktok}
          alt="Logo"
          className="mt-10 cursor-pointer hover:opacity-80"
        />
        <Image
          src={youtube}
          alt="Logo"
          className="mt-10 cursor-pointer hover:opacity-80"
        />
      </div>
    </Container>
  );
};

export default Footer;
