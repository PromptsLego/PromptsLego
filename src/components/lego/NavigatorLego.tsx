import React, { useContext } from "react";
import ContentContext from "../../contexts/ContentContext";
import { LegoProps } from "./Lego";
import { LegoImageUrl, LegoStyle, NavigatorLegoStyle } from "./util";

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
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: "transparent",
        ...NavigatorLegoStyle,
      }}
      onClick={clickHandler}
    >
      {LegoText}
    </button>
  );

  return LegoButton;
};

export default NavigatorLego;
