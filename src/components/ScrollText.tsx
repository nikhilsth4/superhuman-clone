import GradientText from "./GradientText";

const ScrollText = () => {
  return (
    <div>
      <h3 className="text-[26px] font-medium">
        Fly through your email
        <GradientText color="bg-text-b-gradient">twice as fast </GradientText>
        as before <br />
        Be <GradientText>more responsive to</GradientText> what matters most
        <br />
        <GradientText color="bg-text-b-gradient">
          Eliminate email anxiety{" "}
        </GradientText>
        once and for all
      </h3>
    </div>
  );
};

export default ScrollText;
