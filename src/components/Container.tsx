type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`px-6 md:max-w-4xl md:mx-auto ${className}`}>{children}</div>;
};

export default Container;
