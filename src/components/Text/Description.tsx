interface DescriptionInterface {
  children: React.ReactNode;
  className?: string;
}

const Description: React.FC<DescriptionInterface> = ({
  children,
  className,
}) => {
  return (
    <p className={`text-white/90 max-w-[500px] ${className}`}>{children}</p>
  );
};

export default Description;
