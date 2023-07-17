import React, { useContext, useState } from "react";
import ContentContext from "../../contexts/ContentContext";
import { LegoProps } from "./Lego";
import { Popover } from "antd";
import PopContent from "./PopContent";
import { LegoImageUrl, LegoStyle } from "./util";

const categories = [
  "收藏",
  "背景",
  "角色设定",
  "行动任务",
  "输出要求",
  "其他要求",
];

const ChoiceLego: React.FC<LegoProps> = ({
  keyWord,
  detail,
  useTime,
  color,
  varNum,
  ...props
}) => {
  const { details, SetDetails, select, SetSelect, current, SetCurrent } =
    useContext(ContentContext);
  const popContent = <PopContent detail={detail} />;
  const imageUrl = LegoImageUrl(color);

  const [categoriesLeft, setCategoriesLeft] = useState<string[]>(categories);

  const clickHandler = () => {
    let newCurrent = [...current];
    let newCurrentItem = newCurrent.find((item) => item.category === select);
    if (newCurrentItem === undefined) {
      newCurrent.push({
        category: select,
        children: [{ keyWord, detail, useTime, color, varNum }],
      });
    }
    newCurrentItem?.children.push({
      keyWord,
      detail,
      useTime,
      color,
      varNum,
    });
    SetCurrent(newCurrent);

    let newDetails = [...details];
    let targetDetail = newDetails.find((item) => item.category === select);
    if (targetDetail === undefined) {
      newDetails.push({
        category: select,
        details: [detail!],
      });
    } else {
      targetDetail.details.push(detail!);
    }
    SetDetails(newDetails);
  };

  const LegoText = (
    <>
      <div>{keyWord + " | "}</div>
      <div style={{ color: "white" }}>{useTime}</div>
    </>
  );

  const LegoButton = (
    <button
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: "transparent",
        ...LegoStyle,
      }}
      onClick={clickHandler}
    >
      {LegoText}
    </button>
  );

  return <Popover content={popContent}>{LegoButton}</Popover>;
};

export default ChoiceLego;
