import React, {  } from "react";
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

    // SetCurrent((newCurrent) => {
    //   var newCurrentItem = newCurrent.find((item) => item.category === select);
    //   if (newCurrentItem === undefined) {
    //     newCurrent.push({
    //       category: selectCategory,
    //       children: [],
    //     });
    //     newCurrentItem = newCurrent[newCurrent.length - 1];
    //   }

    //   if (newCurrentItem) {
    //     var exist = false;
    //     newCurrentItem.children.forEach((element) => {
    //       if (element.keyWord == keyWord) {
    //         exist = true;
    //       }
    //     });
    //     if (!exist) {
    //       newCurrentItem.children.push({
    //         keyWord,
    //         detail,
    //         useTime,
    //         color,
    //         varNum,
    //       });
    //       SetDetails((newDetails) => {
    //         var detailString = detail!;
    //         const contentBegin = detailString.indexOf("{");
    //         const contentEnd = detailString.lastIndexOf("}");
    //         const prefix = detailString.substring(0, contentBegin);
    //         const postfix = detailString.substring(contentEnd + 1);
    //         const content = detailString.substring(
    //           contentBegin + 1,
    //           contentEnd
    //         );
    //         detailString = prefix + content + postfix;
    //         const targetDetail = newDetails.find(
    //           (item) => item.category === selectCategory
    //         );
    //         if (targetDetail === undefined) {
    //           newDetails.push({
    //             category: selectCategory,
    //             details: [detailString],
    //           });
    //         } else {
    //           targetDetail.details.push(detailString);
    //         }
    //       });
    //     }
    //   }
    // });
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
