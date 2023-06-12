import React, { ButtonHTMLAttributes } from "react";
import NavigatorLego from "./NavigatorLego";
import ChoiceLego from "./ChoiceLego";
import CurrentLego from "./CurrentLego";

export interface LegoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  keyWord: string;
  detail?: string;
  useTime?: number;
  color?: string;
  varNum: number;
  legoType: "navigator" | "lego" | "choice"; // lego: lego in center content; choice: lego in right sider
}

const Lego: React.FC<LegoProps> = ({
  keyWord,
  detail,
  useTime,
  color,
  varNum,
  legoType,
  ...props
}) => {
  return (
    (legoType === "navigator" && (
      <NavigatorLego
        keyWord={keyWord}
        detail={detail}
        useTime={useTime}
        color={color}
        varNum={varNum}
        legoType={legoType}
        {...props}
      />
    )) ||
    (legoType === "lego" && (
      <CurrentLego
        keyWord={keyWord}
        detail={detail}
        useTime={useTime}
        color={color}
        varNum={varNum}
        legoType={legoType}
        {...props}
      />
    )) ||
    (legoType === "choice" && (
      <ChoiceLego
        keyWord={keyWord}
        detail={detail}
        useTime={useTime}
        color={color}
        varNum={varNum}
        legoType={legoType}
        {...props}
      />
    )) || <></>
  );
};

export default Lego;
