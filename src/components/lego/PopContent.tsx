interface PopContentProps {
  detail: string | undefined;
}

const PopContent: React.FC<PopContentProps> = ({ detail }) => {
  return (
    <div style={{ maxWidth: "200px", wordWrap: "break-word" }}>{detail}</div>
  );
};

export default PopContent;
