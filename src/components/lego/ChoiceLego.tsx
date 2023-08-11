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
    SetCurrent((newCurrent) => {
      var newCurrentItem = newCurrent.find((item) => item.category === select);
      if (newCurrentItem === undefined) {
        newCurrent.push({
          category: select,
          children: [],
        });
        newCurrentItem = newCurrent[newCurrent.length - 1]
      }
      
      if(newCurrentItem){
        var exist = false
        newCurrentItem.children.forEach(element => {
          if(element.keyWord==keyWord){
            exist = true
          }
        });
        if(!exist){
          newCurrentItem.children.push({
            keyWord,
            detail,
            useTime,
            color,
            varNum,
          });
          SetDetails((newDetails) => {
            var detailString = detail!
            const contentBegin = detailString.indexOf("{")
            const contentEnd = detailString.lastIndexOf("}")
            const prefix = detailString.substring(0,contentBegin)
            const postfix = detailString.substring(contentEnd+1)
            const content = detailString.substring(contentBegin + 1,contentEnd)
            detailString = prefix + content + postfix
            const targetDetail = newDetails.find((item) => item.category === select);
            if (targetDetail === undefined) {
              newDetails.push({
                category: select,
                details: [detailString],
              });
            } else {
              targetDetail.details.push(detailString);
            }
          })
        }
      }
      
    })
  };

  const LegoText = (
    <div style={{ margin: "auto" }}>
      <div>{keyWord + " | "}</div>
      <div style={{ color: "white" }}>{useTime}</div>
    </div>
  );

  const LegoButton = (
    <button
      style={{
        position: "relative",
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: "transparent",
        ...LegoStyle,
      }}
      onClick={clickHandler}
    >
      <div style={{
        position: "absolute",
        left: "5%",
        right: "10%",
        top: "10%",
        bottom: "10%",
        overflow: "hidden",
        textAlign: "center"
      }}>{LegoText}</div>
    </button>
  );

  return <Popover content={popContent}>{LegoButton}</Popover>;
};

export default ChoiceLego;
