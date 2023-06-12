import logo from "../../assets/Logo.svg";
interface LogoProps {}
const Logo: React.FC<LogoProps> = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        marginTop: "20px",
        height: "40%",
        width: "20%",
      }}
    ></div>
  );
};
export default Logo;
