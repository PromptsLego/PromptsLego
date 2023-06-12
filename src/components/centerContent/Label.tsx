// import PingFang from "../../assets/PingFangSC.ttf";
interface LabelProps {
  text: string;
}
const Label: React.FC<LabelProps> = ({ text }) => {
  return <div style={{ fontSize: "20px", margin: "10px" }}>{"▍" + text}</div>;
};

export default Label;
