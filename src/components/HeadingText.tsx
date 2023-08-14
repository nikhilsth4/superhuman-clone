import React from "react";



const HeadingText = ({ children }:{children: React.ReactNode}) => {
  return <h3 className="text-2xl md:text-4xl font-medium">{children}</h3>;
};

export default HeadingText;
