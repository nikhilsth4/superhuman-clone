import React from "react";
import HeadingText from "./HeadingText";
import GradientText from "./GradientText";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import arrowPink from "../../public/arrow-pink.svg";
import aiImage from "../../public/ai.png";
import impImage from "../../public/important.png";

const IntroductionBody = ({ content }: { content: String[] }) => {
  return (
    content &&
    content.map((con, index) => (
      <p
        key={index}
        className="font-medium mt-4 text-sm text-[#ffffffcc] leading-5 md:text-lg md:leading-7 "
      >
        {con}
      </p>
    ))
  );
};

const Introduction = () => {
  return (
    <div className="md:max-w-4xl m-auto lg:max-w-6xl">
      <Container className="mt-12 md:flex md:gap-8 md:justify-center ">
        <div>
          <HeadingText>
            Introducing
            <GradientText color="bg-text-b-gradient">
              {" "}
              Superhuman AI
            </GradientText>
          </HeadingText>
          <p className="font-medium text-lg mt-4 mb-6 md:mt-8 md:mb-10 md:text-xl lg:text-2xl">
            Write entire emails with just one line
          </p>
          <IntroductionBody
            content={[
              "With Superhuman AI, you can write faster than ever before. Just jot down some phrases, and we'll turn them into a full email.",
              "Best of all, the email sounds like you. Superhuman AI matches the voice and tone in the emails you've already sent, applying that to everything it creates.",
              "Say goodbye to writer's block and hello to effortless productivity.",
            ]}
          />
          <Link href="#" className="flex gap-2 mt-4 md:mt-6">
            <GradientText
              className="font-normal text-lg lg:text-xl"
              color="bg-text-b-gradient"
            >
              See More
            </GradientText>
            <Image alt="arrow" src={arrowPink} className="w-3 " />
          </Link>
        </div>

        <Image src={aiImage} alt="ai" className="mt-10" />
      </Container>
      <Container className="mt-12 md:flex md:mt-20 md:gap-8 lg:mt-[8rem]">
        <div>
          <HeadingText>
            <GradientText>
              Respond faster{" "}
            </GradientText>
            to what matters most
          </HeadingText>
          <p className="font-medium text-lg mt-4 mb-6 md:mt-8 md:mb-10 md:text-xl lg:text-2xl">
            Automatically triage incoming email
          </p>
          <IntroductionBody
            content={[
              "We all get too much email. The urgent buries the important. We don't reply to our team or VIPs. And we miss notifications from tools like Google Docs. As a result, we lose opportunities, block our teams, and damage our reputations.",
              "With Split Inbox, you can instead focus on what needs your attention. Split out emails from your team, your VIPs, or your most used tools — Google Docs, Notion, Asana — or anything else. Even when your inbox is overflowing, you'll respond fast where it matters most.",
            ]}
          />
        </div>

        <Image src={impImage} alt="important" className="mt-10" />
      </Container>
    </div>
  );
};

export default Introduction;
