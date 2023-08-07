type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`px-6 ${className}`}>{children}</div>;
};

export default Container;
