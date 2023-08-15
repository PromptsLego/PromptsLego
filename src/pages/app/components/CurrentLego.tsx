import React, { useRef, useEffect } from "react";
import { Popover } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import Lego from "@/ui/Lego";
import { useAppDispatch } from "@/contexts/hooks";
import { drop, edit } from "../ContentSlice";
import { useClickPreventionOnDoubleClick } from "../hooks/useClickPreventionOnDoubleClick";
import styled from "styled-components";

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

const StyledInput = styled.input`
  font-size: 1.3rem;
  line-height: 1;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  outline: none;

  &:focus {
    outline: 0;
  }
`;

function getVars(str: string) {
  const regex = /{([^}]+)}/g;
  const matches = str.match(regex);

  if (matches) {
    return matches.map((match) => match.slice(1, -1));
  } else {
    return [];
  }
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

  // const inputRef = useRef<InputRef>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const vars = useRef<string[]>(getVars(detail));
  const [state, SetState] = React.useState<LegoState>(
    vars.current.length === 0 ? "normal" : "var",
  );
  const clickHandler = () => {
    if (state === "fill") {
      SetState("var");
    }
  };
  const doubleClickHandler = () => {
    dispatch(drop({ keyWord, detail, useTime, color, varNum }));
  };
  const [handleClick, handleDoubleClick] = useClickPreventionOnDoubleClick(
    clickHandler,
    doubleClickHandler,
  );
  const editInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      edit({ keyWord, detail: event.target.value, useTime, color, varNum }),
    );
  };
  useEffect(() => {
    if (state === "var") {
      inputRef.current?.focus();
    }
  }, [state]);

  const LegoContent =
    (state === "normal" && <>{keyWord}</>) ||
    (state === "fill" && (
      <>
        <CaretRightOutlined />
        <span>{keyWord}</span>
      </>
    )) ||
    (state === "var" && (
      <>
        <CaretRightOutlined rotate={90} />
        <StyledInput
          type="text"
          value={detail}
          ref={inputRef}
          onChange={editInputHandler}
          onBlur={() => {
            SetState("fill");
          }}
          // onPressEnter={() => {
          //   SetState("fill");
          // }}
        />
      </>
    ));

  return (
    <Popover content={<p>{detail}</p>}>
      <Lego
        color={color}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        {LegoContent}
      </Lego>
    </Popover>
  );
};

export default CurrentLego;
