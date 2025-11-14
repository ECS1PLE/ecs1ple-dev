interface InterfaceSpan {
  fontSize?: number;
  children: React.ReactNode;
  className?: string;
}

const Span: React.FC<InterfaceSpan> = ({ fontSize, children, className }) => {
  return (
    <span className={`text-[#8783D1] ${className}`} style={{ fontSize }}>
      {children}
    </span>
  );
};

export default Span;
