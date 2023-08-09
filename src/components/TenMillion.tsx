import Container from "./Container";

function TenMillion() {
  return (
    <div className="bg-[url(../../public/10m.png)] bg-no-repeat bg-contain bg-center h-60 relative">
      <Container>
        <h3 className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-medium text-2xl w-full">
          Superhuman saves team over <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            10 million hours
          </span>
          every single year
        </h3>
      </Container>
    </div>
  );
}

export default TenMillion;
