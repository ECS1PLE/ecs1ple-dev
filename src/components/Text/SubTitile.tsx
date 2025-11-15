interface SubTitleInterface {
  children?: React.ReactNode;
}

const SubTitle: React.FC<SubTitleInterface> = ({ children }) => {
  return <p className="text-xl">{children}</p>;
};

export default SubTitle;
