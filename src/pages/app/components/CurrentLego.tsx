import React, { useContext, useRef, useEffect } from "react";
import { Popover } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { LegoFrozenImageUrl, LegoImageUrl } from "@/utils/lego";
import { Input, InputRef } from "antd";
import ContentContext from "@/contexts/ContentContext";
import Lego from "@/ui/Lego";

type LegoState =
  | "normal"
  | "var"
  | "edit"
  | "fill"
  | "normal-frozen"
  | "var-frozen"
  | "fill-frozen";

interface CurrentLegoProps {
  keyWord: string;
  detail: string;
  useTime: number;
  color: string;
  varNum: number;
  category: string;
}

const CurrentLego: React.FC<CurrentLegoProps> = ({
  keyWord,
  detail,
  useTime,
  color,
  varNum,
  category,
  ...props
}) => {
  // const inputRef = useRef<InputRef>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  var detailContent = detail!;
  const contentBegin = detailContent.indexOf("{");
  const [state, SetState] = React.useState<LegoState>(
    contentBegin == undefined || contentBegin == -1 ? "normal" : "var",
  );
  useEffect(() => {
    inputRef.current?.focus();
  }, [state]);

  if (contentBegin != undefined && contentBegin != -1) {
    detailContent = detailContent.substring(contentBegin + 1);
    detailContent = detailContent.substring(0, detailContent.lastIndexOf("}"));
  }
  const [detailState, SetDetailState] = React.useState<string>(detailContent);
  const {
    current,
    SetCurrent,
    select,
    details,
    SetDetails,
    mouseStatus,
    SetMouseStatus,
  } = useContext(ContentContext);
  const imageUrl =
    state === "normal" || state === "fill"
      ? LegoImageUrl(color)
      : state === "fill-frozen" ||
        state === "var-frozen" ||
        state === "normal-frozen"
      ? LegoFrozenImageUrl(color)
      : LegoImageUrl("white");
  const popContent = <p>{detailState}</p>;

  const clickMouseLeftHandler = () => {
    if (mouseStatus === "frozen") {
      if (state === "normal") {
        SetState("normal-frozen");
      } else if (state === "var") {
        SetState("var-frozen");
      } else if (state === "fill") {
        SetState("fill-frozen");
      } else if (state === "normal-frozen") {
        SetState("normal");
      } else if (state === "var-frozen") {
        SetState("var");
      } else if (state === "fill-frozen") {
        SetState("fill");
      }
    } else if (state === "normal") {
    } else if (state === "var") {
      SetState("edit");
    } else if (state === "fill") {
      SetState("edit");
    }
  };
  const clickMouseRightHandler = () => {
    SetCurrent((curCurrent) => {
      const current_category = curCurrent.find(
        (item) => item.category === category,
      );
      let targetIndex = current_category?.children.findIndex(
        (item) =>
          item.keyWord === keyWord &&
          item.color === color &&
          item.useTime === useTime &&
          item.varNum === varNum,
      );
      if (targetIndex === undefined || targetIndex === -1) return;
      const detailString = current_category?.children[targetIndex].detail!;
      const contentBegin = detailString.indexOf("{");
      const contentEnd = detailString.lastIndexOf("}");
      const prefix = detailString.substring(0, contentBegin);
      const postfix = detailString.substring(contentEnd + 1);
      current_category?.children.splice(targetIndex, 1);
      SetDetails((curDetail) => {
        const targetDetail = curDetail.find(
          (item) => item.category === category,
        );
        if (targetDetail === undefined) return;
        if (contentBegin == undefined || contentBegin == -1) {
          let targetIndex = targetDetail.details.findIndex(
            (item) => item == detailState,
          );
          targetDetail.details.splice(targetIndex, 1);
        } else {
          let targetIndex = targetDetail.details.findIndex(
            (item) => item.startsWith(prefix) && item.endsWith(postfix),
          );
          targetDetail.details.splice(targetIndex, 1);
        }
      });
    });
  };
  const editInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetCurrent((curCurrent) => {
      const current_category = curCurrent.find(
        (item) => item.category === category,
      );
      const targetLego = current_category?.children.find(
        (item) =>
          item.keyWord === keyWord &&
          item.useTime === useTime &&
          item.color === color &&
          item.varNum === varNum,
      );
      if (targetLego === undefined) return;

      const detailString = targetLego.detail!;
      const contentBegin = detailString.indexOf("{");
      const contentEnd = detailString.lastIndexOf("}");
      const prefix = detailString.substring(0, contentBegin);
      const postfix = detailString.substring(contentEnd + 1);
      targetLego.detail = prefix + "{" + event.target.value + "}" + postfix;
      SetDetails((curDetail) => {
        const targetDetail = curDetail.find(
          (item) => item.category === category,
        );
        const index = targetDetail?.details?.findIndex(
          (item) => item.startsWith(prefix) && item.endsWith(postfix),
        );
        if (index === undefined || index === -1) return;
        targetDetail?.details?.splice(
          index,
          1,
          prefix + event.target.value + postfix,
        );
        SetDetailState(event.target.value);
      });
    });
  };

  const LegoText =
    ((state === "normal" || state === "normal-frozen") && (
      <div>{keyWord}</div>
    )) ||
    ((state === "var" ||
      state === "fill" ||
      state === "var-frozen" ||
      state === "fill-frozen") && (
      <>
        <CaretRightOutlined rotate={90} size={10} />
        <span>{keyWord}</span>
      </>
    )) ||
    (state === "edit" && (
      <>
        <CaretRightOutlined rotate={90} size={10} />
        <input
          type="text"
          value={detailState}
          ref={inputRef}
          onChange={editInputHandler}
          onBlur={() => {
            SetState("fill");
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            borderColor: "transparent",
          }}
        />
      </>
    ));

  return (
    <Popover content={popContent}>
      <Lego
        color={color}
        onClick={clickMouseLeftHandler}
        onDoubleClick={clickMouseRightHandler}
      >
        {LegoText}
      </Lego>
    </Popover>
  );
};

export default CurrentLego;
