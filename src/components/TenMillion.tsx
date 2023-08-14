import Container from "./Container";
import GradientText from "./GradientText";

function TenMillion() {
  return (
    <div className="bg-[url(../../public/10m.png)] bg-no-repeat bg-contain bg-center h-60 relative md:h-96">
      <Container>
        <h3 className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-medium text-2xl w-full md:text-4xl">
          Superhuman saves team over <br />
          <GradientText>10 million hours</GradientText> every single year
        </h3>
      </Container>
    </div>
  );
}

export default TenMillion;
