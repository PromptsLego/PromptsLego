import React, { useContext } from "react";
import ContentContext from "@/contexts/ContentContext";
import { LegoImageUrl, LegoStyle, NavigatorLegoStyle } from "@/utils/lego";
import LegoLeft from "@/assets/legoLeft.png";
import LegoRight from "@/assets/legoRight.png";
import LegoMiddle from "@/assets/legoMiddle.png";
import Lego from "@/ui/Lego";

interface NaviagatorLegoProps {
  keyWord: string;
  color: string;
}

const NavigatorLego: React.FC<NaviagatorLegoProps> = ({ keyWord, color }) => {
  const { SetSelect } = useContext(ContentContext);
  const imageUrl = LegoImageUrl(color);

  const clickHandler = () => {
    SetSelect(keyWord);
  };

  const LegoText = <div>{keyWord}</div>;

  const LegoButton = (
    <Lego color={color} onClick={clickHandler}>
      {keyWord}
    </Lego>
  );

  return LegoButton;
};

export default NavigatorLego;
