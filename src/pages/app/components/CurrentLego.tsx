import React, { useRef, useEffect } from "react";
import { Popover } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import Lego from "@/ui/Lego";
import { useAppDispatch } from "@/contexts/hooks";
import { drop, edit } from "../ContentSlice";
import { useClickPreventionOnDoubleClick } from "../hooks/useClickPreventionOnDoubleClick";
import { countEmptyVaribles,extractContents,LegoInputBox } from "@/pages/app/components/LegoInputBox";
import styled from "styled-components";
import TextWithInput from "./TextWithInput";
import { useImmer } from "use-immer";

type LegoState = "normal" | "var" | "edit" | "fill";

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
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const {content,varible} = extractContents(detail)
  const contentRef = useRef(content)
  const varibleRef = useRef(varible)
  const [state, SetState] = useImmer<LegoState>(
    contentRef.current.length == 1 ? "normal" : "var",
  );

  const clickHandler = () => {
    switch (state) {
      case "fill":
      case "var":
        SetState("edit");
        break;
      case "edit":
        SetState("fill");
        break;
    }
  };

  const doubleClickHandler = () => {
    dispatch(drop({ keyWord, detail, useTime, color, varNum }));
  };

  const [handleClick, handleDoubleClick] = useClickPreventionOnDoubleClick(
    clickHandler,
    doubleClickHandler,
  );

  const inputBoxEnterEvent = ()=>{
    SetState("fill");
  }

  useEffect(() => {
    if (state === "var") {
      inputRef.current?.focus();
    }
  }, [state]);

  const LegoContent = (
    <>
      {state === "normal"?<></>:<CaretRightOutlined />}
      <span>{keyWord}</span>
    </>
  );

  const currentColor = state==="var" 
  || (state==="fill" 
  &&contentRef.current
  &&varibleRef.current
  && countEmptyVaribles(detail,contentRef.current,varibleRef.current)>0)
  ? "white" : color

  return (
    <>
      <Popover content={<p style={{maxWidth: "40vw"}}>{detail}</p>}>
        <div
          style={{ width: state === "edit" ? "100%" : "auto", display: "flex" }}
        >
          <Lego
            color={currentColor}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
          >
            {LegoContent}
          </Lego>
        </div>
      </Popover>
      {state === "edit" ? (
        <LegoInputBox
          keyWord={keyWord}
          detail={detail}
          useTime={useTime}
          color={color}
          varNum={varNum}
          contentRef={contentRef}
          varibleRef={varibleRef}
          enterEvent={inputBoxEnterEvent}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default CurrentLego;
