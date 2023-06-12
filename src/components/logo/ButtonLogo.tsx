import logo from "../../assets/button.svg";
interface ButtonLogoProps {}
const ButtonLogo: React.FC<ButtonLogoProps> = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundColor: 'white',
        height: "13px",
        width: "220px",
      }}
    ></div>
  );
};
export default ButtonLogo;
