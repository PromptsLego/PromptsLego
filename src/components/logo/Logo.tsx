import logo from "../../assets/Logo.svg";
interface LogoProps {}
const Logo: React.FC<LogoProps> = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        marginTop: "20px",
        height: "40%",
        width: "auto",
      }}
    ></div>
  );
};
export default Logo;
