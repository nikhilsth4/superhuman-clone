type ButtonProps = {
  name: string;
  className?: string;
};

const Button = ({ name, className }: ButtonProps) => {
  return (
    <button
      className={`bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1  rounded w-full cursor-pointer  hover:opacity-80 ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
