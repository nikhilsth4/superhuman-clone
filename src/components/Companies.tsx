import Image from "next/image";
import harvard from "../../public/harvard.svg";
import uber from "../../public/uber.svg";
import netflix from "../../public/netflix.svg";
import compass from "../../public/compass.svg";
import brex from "../../public/brex.svg";
import deel from "../../public/deel.svg";
import notion from "../../public/notion.svg";

const companies = [harvard, uber, netflix, compass, brex, deel, notion];

const DisplayCompanies = () => {
  return (
    <>
      {companies.map((company, index) => {
        return (
          <Image
            key={index}
            src={company}
            alt="company"
            className="w-auto h-50 mx-10 md:w-full lg:h-10"
          />
        );
      })}
    </>
  );
};

function Companies() {
  return (
    <div className="pb-20 pt-14 overflow-hidden whitespace-nowrap  relative lg:pb-40">
      <div className="animate-slide flex lg:gap-12">
        <DisplayCompanies />
        <DisplayCompanies />
      </div>
    </div>
  );
}

export default Companies;
