import React from "react";
import Lego from "@/ui/Lego";
import { Popover } from "antd";
import { useAppDispatch } from "@/contexts/hooks";
import { choose } from "../ContentSlice";

const categories = [
  "收藏",
  "背景",
  "角色设定",
  "行动任务",
  "输出要求",
  "其他要求",
];

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
  const popContent = <p>{detail}</p>;

  const clickHandler = () => {
    dispatch(choose({ keyWord, detail, useTime, color, varNum }));
  };

  return (
    <Popover content={popContent}>
      <Lego color={color} onClick={clickHandler}>
        <span>{keyWord + " | "}</span>
        <span style={{ color: "white" }}>{useTime}</span>
      </Lego>
    </Popover>
  );
};

export default ChoiceLego;
