interface TextInteface {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextInteface> = ({ children, className }) => {
  return (
    <h2 className={`text-4xl font-semibold text-white ${className}`}>
      {children}
    </h2>
  );
};

export default Text;
