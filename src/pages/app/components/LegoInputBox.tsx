import styled from "styled-components";
import React, { useRef } from "react";
import { useImmer } from "use-immer";
import { edit } from "../ContentSlice";
import { useAppDispatch } from "@/contexts/hooks";
import InputBackgroundLegoLeftUp from "@/assets/inputBackgroungLegoLeftUp.png";
import InputBackgroundLegoLeftMiddle from "@/assets/inputBackgroungLegoLeftMiddle.png";
import InputBackgroundLegoLeftDown from "@/assets/inputBackgroungLegoLeftDown.png";
import InputBackgroundLegoMiddleUp from "@/assets/inputBackgroungLegoMiddleUp.png";
import InputBackgroundLegoMiddleDown from "@/assets/inputBackgroungLegoMiddleDown.png";
import InputBackgroundLegoRightUp from "@/assets/inputBackgroungLegoRightUp.png";
import InputBackgroundLegoRightMiddle from "@/assets/inputBackgroungLegoRightMiddle.png";
import InputBackgroundLegoRightDown from "@/assets/inputBackgroungLegoRightDown.png";

const LegoInputContainer = styled.div`
  position: relative;
  min-height: 10rem;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: -1.9rem;
`;
const LegoInputBackgroundLeft = styled.div`
  width: 0.8rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const LegoInputBackgroundLeftUp = styled.div`
  height: 1rem;
  width: 100%;
  background-image: url(${InputBackgroundLegoLeftUp});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
const LegoInputBackgroundLeftMiddle = styled.div`
  flex-grow: 1;
  width: 100%;
  min-height: 1rem;
  background-image: url(${InputBackgroundLegoLeftMiddle});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
const LegoInputBackgroundLeftDown = styled.div`
  height: 1.2rem;
  width: 100%;
  background-image: url(${InputBackgroundLegoLeftDown});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
const LegoInputBackgroundMiddle = styled.div`
  flex-grow: 1;
  min-width: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const LegoInputBackgroundMiddleUp = styled.div`
  height: 1rem;
  width: 100%;
  background-image: url(${InputBackgroundLegoMiddleUp});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
const LegoInputBackgroundMiddleMiddle = styled.div`
  flex-grow: 1;
  width: 100%;
  min-height: 1rem;
`;
const LegoInputBackgroundMiddleDown = styled.div`
  height: 1.2rem;
  width: 100%;
  background-image: url(${InputBackgroundLegoMiddleDown});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
const LegoInputBackgroundRight = styled.div`
  width: 1.4rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const LegoInputBackgroundRightUp = styled.div`
  height: 1rem;
  width: 100%;
  background-image: url(${InputBackgroundLegoRightUp});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
const LegoInputBackgroundRightMiddle = styled.div`
  flex-grow: 1;
  width: 100%;
  min-height: 1rem;
  background-image: url(${InputBackgroundLegoRightMiddle});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
const LegoInputBackgroundRightDown = styled.div`
  height: 1.2rem;
  width: 100%;
  background-image: url(${InputBackgroundLegoRightDown});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

interface LegoInputBoxProps {
  keyWord: string;
  detail: string;
  useTime: number;
  color: string;
  varNum: number;
  contentRef:React.MutableRefObject<string[]>;
}

export const extractContents = (detail:string)=>{
  var content:string[] = []
  while(true){
    const begin = detail.indexOf("{")
    if(begin==-1){
      break
    }else{
      content.push(detail.substring(0,begin + 1))
      const end = detail.indexOf("}")
      if(end==-1 || end < begin){
        return content
      }else{
        detail = detail.substring(end)
      }
    }
  }
  if(detail!=null && detail!=undefined && detail.length>0){
    content.push(detail)
  }
  return content
}

const verifyDetail = (text:string,content:string[])=>{
  
  for(let i = 0;i<content.length;i++){
    const element = content[i]
    var index = text.indexOf(element)
    if(index==-1){
      return false
    }else{
      text = text.substring(index + element.length)
    }
  }
  return true
}

export const LegoInputBox: React.FC<LegoInputBoxProps> = ({
  keyWord,
  detail,
  useTime,
  color,
  varNum,
  contentRef
}) => {
  const dispatch = useAppDispatch();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [content, setContent] = useImmer(detail);
  
  const onChange = (text: string) => {
    if (contentRef.current && verifyDetail(text, contentRef.current)) {
      setContent(text);
      dispatch(
        edit({
          keyWord: keyWord,
          detail: text,
          useTime: useTime,
          color: color,
          varNum: varNum,
        }),
      );
    }
  };

  const detailTextarea = (
    <textarea
      style={{
        resize: "none",
        width: "100%",
        border: "0",
        height: "100%",
        fontSize: "1.3rem",
      }}
      value={content}
      onChange={(event) => onChange(event.target.value)}
    ></textarea>
  );
  return (
    <LegoInputContainer>
      <LegoInputBackgroundLeft>
        <LegoInputBackgroundLeftUp></LegoInputBackgroundLeftUp>
        <LegoInputBackgroundLeftMiddle></LegoInputBackgroundLeftMiddle>
        <LegoInputBackgroundLeftDown></LegoInputBackgroundLeftDown>
      </LegoInputBackgroundLeft>
      <LegoInputBackgroundMiddle>
        <LegoInputBackgroundMiddleUp></LegoInputBackgroundMiddleUp>
        <LegoInputBackgroundMiddleMiddle>
          {detailTextarea}
        </LegoInputBackgroundMiddleMiddle>
        <LegoInputBackgroundMiddleDown></LegoInputBackgroundMiddleDown>
      </LegoInputBackgroundMiddle>
      <LegoInputBackgroundRight>
        <LegoInputBackgroundRightUp></LegoInputBackgroundRightUp>
        <LegoInputBackgroundRightMiddle></LegoInputBackgroundRightMiddle>
        <LegoInputBackgroundRightDown></LegoInputBackgroundRightDown>
      </LegoInputBackgroundRight>
    </LegoInputContainer>
  );
};
