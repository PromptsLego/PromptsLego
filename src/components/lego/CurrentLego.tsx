import React, { useContext, useRef, useEffect } from "react";
import { LegoProps } from "./Lego";
import { Popover, message } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import PopContent from "./PopContent";
import {
  LegoFrozenImageUrl,
  LegoImageUrl,
  LegoStyle,
  UpdateCurrentDetail,
} from "./util";
import { Input, InputRef } from "antd";
import ContentContext from "../../contexts/ContentContext";

// normal: 普通状态
// var: 变量状态
// edit: 编辑状态
// fill: 变量填充状态
// froze: 冻结状态
type LegoState =
  | "normal"
  | "var"
  | "edit"
  | "fill"
  | "normal-frozen"
  | "var-frozen"
  | "fill-frozen";

const CurrentLego: React.FC<LegoProps> = ({
  keyWord,
  detail,
  useTime,
  color,
  varNum,
  ...props
}) => {
  const inputRef = useRef<InputRef>(null);
  const [state, SetState] = React.useState<LegoState>(
    varNum === 0 ? "normal" : "var"
  );
  useEffect(() => {
    inputRef.current?.focus();
  }, [state]);
  const [detailState, SetDetailState] = React.useState<string>(detail!);
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
  const popContent = <PopContent detail={detailState} />;

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
    // 从current中移除当前的lego
    const current_category = current.find((item) => {
      return item.category === select;
    });
    let targetIndex = current_category?.children.findIndex((item) => {
      return (
        item.keyWord === keyWord &&
        item.detail === detailState &&
        item.color === color &&
        item.useTime === useTime &&
        item.varNum === varNum
      );
    });
    if (targetIndex === undefined) return;
    current_category?.children.splice(targetIndex, 1);
    SetCurrent([...current]);

    // 从details中移除当前的detail
    let newDetails = [...details];
    let targetDetail = newDetails.find((item) => item.category === select);
    if (targetDetail === undefined) return;
    targetIndex = targetDetail.details.findIndex(
      (item) => item === detailState
    );
    targetDetail.details.splice(targetIndex, 1);
    SetDetails(newDetails);
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
        <text>{keyWord}</text>
      </>
    )) ||
    (state === "edit" && (
      <>
        <CaretRightOutlined rotate={90} size={10} />
        <Input
          type="text"
          value={detailState}
          ref={inputRef}
          onChange={(event) => {
            SetDetailState(event.target.value);
            UpdateCurrentDetail(
              details,
              SetDetails,
              current,
              SetCurrent,
              select,
              {
                keyWord: keyWord,
                detail: detailState,
                useTime: useTime,
                color: color,
                varNum: varNum,
              },
              event.target.value
            );
          }}
          onBlur={() => {
            SetState("fill");
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            borderColor: "transparent",
          }}
          onPressEnter={() => {
            SetState("fill");
          }}
        />
      </>
    ));

  const LegoButton = (
    <button
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: "transparent",
        ...LegoStyle,
      }}
      onClick={clickMouseLeftHandler}
      onDoubleClick={clickMouseRightHandler}
    >
      {LegoText}
    </button>
  );

  return <Popover content={popContent}>{LegoButton}</Popover>;
};

export default CurrentLego;
