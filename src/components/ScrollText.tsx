import GradientText from "./GradientText";

const ScrollText = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <h3 className="text-[26px] font-medium lg:text-5xl">
        Fly through your email <br />
        <GradientText color="bg-text-b-gradient">twice as fast </GradientText>
        as before <br />
        <br />
        Be{" "}
        <GradientText>
          more responsive to <br />
        </GradientText>{" "}
        what matters most
        <br />
        <br />
        <GradientText color="bg-text-b-gradient">
          Eliminate email <br /> anxiety{" "}
        </GradientText>
        once <br />
        <br />
        and for all
      </h3>
    </div>
  );
};

export default ScrollText;
