interface DescriptionInterface {
  children: React.ReactNode;
}

const Description: React.FC<DescriptionInterface> = ({ children }) => {
  return <p className="text-white/90 max-w-[500px]">{children}</p>;
};

export default Description;
