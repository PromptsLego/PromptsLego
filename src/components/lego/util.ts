import lego_yellow from "../../assets/lego-yellow.svg";
import lego_gray from "../../assets/lego-gray.svg";
import lego_blue from "../../assets/lego-blue.svg";
import lego_cyan from "../../assets/lego-cyan.svg";
import lego_green from "../../assets/lego-green.svg";
import lego_purple from "../../assets/lego-purple.svg";
import lego_pink from "../../assets/lego-pink.svg";
import lego_white from "../../assets/lego-white.svg";
import lego_yellow_pin from "../../assets/lego-yellow-pin.svg";
import lego_blue_pin from "../../assets/lego-blue-pin.svg";
import lego_cyan_pin from "../../assets/lego-cyan-pin.svg";
import lego_green_pin from "../../assets/lego-green-pin.svg";
import lego_purple_pin from "../../assets/lego-purple-pin.svg";
import lego_white_pin from "../../assets/lego-white-pin.svg";
import { ContentContextType } from "../../contexts/ContentContext";
import { LegoType } from "./LegoType";

export const LegoImageUrl = (color: string | undefined) => {
  return color === "yellow"
    ? lego_yellow
    : color === "purple"
    ? lego_purple
    : color === "blue"
    ? lego_blue
    : color === "cyan"
    ? lego_cyan
    : color === "green"
    ? lego_green
    : color === "pink"
    ? lego_pink
    : color === "white"
    ? lego_white
    : lego_gray;
};

export const LegoFrozenImageUrl = (color: string | undefined) => {
  return color === "yellow"
    ? lego_yellow_pin
    : color === "blue"
    ? lego_blue_pin
    : color === "cyan"
    ? lego_cyan_pin
    : color === "green"
    ? lego_green_pin
    : color === "purple"
    ? lego_purple_pin
    : color === "white"
    ? lego_white_pin
    : lego_gray;
};

export const LegoStyle = {
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "50px",
  width: "180px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "15px",
  borderColor: "transparent",
};
export const NavigatorLegoStyle = {
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "30px",
  width: "110px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "15px",
  borderColor: "transparent",
};

export const UpdateCurrentDetail = (
  details: ContentContextType["details"],
  SetDetails: ContentContextType["SetDetails"],
  current: ContentContextType["current"],
  SetCurrent: ContentContextType["SetCurrent"],
  category: string,
  lego: LegoType,
  updateDetail: string
) => {
  const current_category = current.find((item) => item.category === category);
  const targetLego = current_category?.children.find(
    (item) =>
      item.keyWord === lego.keyWord &&
      item.detail === lego.detail &&
      item.useTime === lego.useTime &&
      item.color === lego.color &&
      item.varNum === lego.varNum
  );
  if (targetLego === undefined) return;
  targetLego.detail = updateDetail;
  SetCurrent([...current]);

  let newDetails = [...details];
  let targetDetail = newDetails.find((item) => item.category === category);
  let index = targetDetail?.details?.findIndex((item) => item === lego.detail);
  if (index === undefined || index === -1) return;
  targetDetail?.details?.splice(index, 1, updateDetail);
  console.log(newDetails);
  SetDetails(newDetails);
};
