import React from "react";
import Lego from "@/ui/Lego";
import { Popover } from "antd";
import { useAppDispatch } from "@/contexts/hooks";
import { choose } from "../ContentSlice";

interface ChoiceLegoProps {
  keyWord: string;
  detail: string;
  useTime: number;
  color: string;
  varNum: number;
}

const ChoiceLego: React.FC<ChoiceLegoProps> = ({
  keyWord,
  detail,
  useTime,
  color,
  varNum,
}) => {
  const dispatch = useAppDispatch();
  const popContent = <p style={{ zIndex: 99, maxWidth: "40vw" }}>{detail}</p>;

  const clickHandler = () => {
    dispatch(choose({ keyWord, detail, useTime, color, varNum }));
  };

  return (
    <Popover content={popContent}>
      <Lego color={color} onClick={clickHandler}>
        <span>{keyWord + " | "}</span>
        <span style={{ color: "black" }}>{useTime}</span>
      </Lego>
    </Popover>
  );
};

export default ChoiceLego;
