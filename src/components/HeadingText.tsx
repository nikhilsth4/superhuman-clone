import React from "react";



const HeadingText = ({ children }:{children: React.ReactNode}) => {
  return <h3 className="text-[26px] font-medium">{children}</h3>;
};

export default HeadingText;
