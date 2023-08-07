import React, { useContext } from "react";
import ContentContext from "../../contexts/ContentContext";
import { LegoProps } from "./Lego";
import { LegoImageUrl, LegoStyle, NavigatorLegoStyle } from "./util";
import "./Lego.css"
import LegoLeft from "../../assets/legoLeft.png"
import LegoRight from "../../assets/legoRight.png"
import LegoMiddle from "../../assets/legoMiddle.png"

const NavigatorLego: React.FC<LegoProps> = ({
  keyWord,
  detail,
  color,
  ...props
}) => {
  const { SetSelect } = useContext(ContentContext);
  const imageUrl = LegoImageUrl(color);

  const clickHandler = () => {
    SetSelect(keyWord);
  };

  const LegoText = <div>{keyWord}</div>;

  const LegoButton = (
    <button
      style={{
        position:"relative",
        backgroundColor: "transparent",
        ...NavigatorLegoStyle,
      }}
      onClick={clickHandler}
    >
      <div style={{
        position:"absolute",
        overflow:"hidden",
        left:"10%",
        right:"10%",
        top:"10%",
        bottom:"10%"
        }}>{LegoText}</div>
      <div style={{
        width:"15px",height:"100%",
        backgroundImage: `url(${LegoLeft})`,
        backgroundSize:"100% 100%",
        }}></div>
      <div style={{
        width:"100%",height:"100%",
        backgroundImage: `url(${LegoMiddle})`,
        backgroundSize:"100% 100%",
        }}></div>
      <div style={{
        width:"15px",height:"100%",
        backgroundImage: `url(${LegoRight})`,
        backgroundSize:"100% 100%",
        }}></div>
    </button>
  );

  return LegoButton;
};

export default NavigatorLego;
