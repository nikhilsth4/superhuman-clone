import React from "react";

type GradientTextProps = {
  children: React.ReactNode;
  color?: string;
  className?: string;
};

const GradientText = ({
  children,
  color = "bg-text-y-gradient",
  className = "font-bold",
}: GradientTextProps) => {
  return (
    <span className={`text-transparent bg-clip-text ${color} ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;
