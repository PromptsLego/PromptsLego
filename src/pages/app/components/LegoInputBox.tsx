import styled from "styled-components";
import React, { useRef } from "react";
import { useImmer } from "use-immer";
import { edit } from "../ContentSlice";
import { useAppDispatch } from "@/contexts/hooks";
import InputBackgroundLegoLeftUp from "@/assets/inputBackgroungLegoLeftUp.png"
import InputBackgroundLegoLeftMiddle from "@/assets/inputBackgroungLegoLeftMiddle.png"
import InputBackgroundLegoLeftDown from "@/assets/inputBackgroungLegoLeftDown.png"
import InputBackgroundLegoMiddleUp from "@/assets/inputBackgroungLegoMiddleUp.png"
import InputBackgroundLegoMiddleDown from "@/assets/inputBackgroungLegoMiddleDown.png"
import InputBackgroundLegoRightUp from "@/assets/inputBackgroungLegoRightUp.png"
import InputBackgroundLegoRightMiddle from "@/assets/inputBackgroungLegoRightMiddle.png"
import InputBackgroundLegoRightDown from "@/assets/inputBackgroungLegoRightDown.png"

const LegoInputContainer = styled.div`
  position: relative;
  min-height: 10rem;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top:-1.9rem;
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
  flex-grow:1;
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
  flex-grow:1;
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
  flex-grow:1;
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
  flex-grow:1;
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
}

export const LegoInputBox: React.FC<LegoInputBoxProps> = ({keyWord,detail,useTime,color,varNum}) => {
  const verifyDetail = (oriDetail:string,newDetail:string)=>{
    while(true){
      var oriStart = oriDetail.indexOf("{")
      var newStart = newDetail.indexOf("{")
      if(oriStart == -1 && newStart == -1){
        var oriEnd = oriDetail.indexOf("}")
        var newEnd = newDetail.indexOf("}")
        var oriPostfix = oriDetail.substring(oriEnd)
        var newPostfix = newDetail.substring(newEnd)
        return oriPostfix == newPostfix
      }else if(oriStart == newStart){
        var oriPrefix = oriDetail.substring(0,oriStart)
        var newPrefix = newDetail.substring(0,newStart)
        if(oriPrefix!=newPrefix){
          return false
        }
      }else{
        return false
      }
      oriDetail = oriDetail.substring(oriStart + 1)
      newDetail = newDetail.substring(newStart + 1)
    }
    return false
  }
  const dispatch = useAppDispatch()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [content,setContent] = useImmer(detail)
  const onChange = (text:string)=>{
    if(verifyDetail(text,content)){
      setContent(text)
      dispatch(edit({ 
        keyWord:keyWord, 
        detail:text, 
        useTime:useTime, 
        color:color, 
        varNum:varNum 
      }));
    }
  }

  const detailTextarea = (
    <textarea
    style={{
      resize:"none",
      width:"100%",
      border:"0",
      height:"100%",
      fontSize:"1.3rem"
    }}
    value={content}
    onChange={(event)=>onChange(event.target.value)}>
    </textarea>
  )
  return (
    <LegoInputContainer>
      <LegoInputBackgroundLeft>
        <LegoInputBackgroundLeftUp></LegoInputBackgroundLeftUp>
        <LegoInputBackgroundLeftMiddle></LegoInputBackgroundLeftMiddle>
        <LegoInputBackgroundLeftDown></LegoInputBackgroundLeftDown>
      </LegoInputBackgroundLeft>
      <LegoInputBackgroundMiddle>
        <LegoInputBackgroundMiddleUp></LegoInputBackgroundMiddleUp>
        <LegoInputBackgroundMiddleMiddle>{detailTextarea}</LegoInputBackgroundMiddleMiddle>
        <LegoInputBackgroundMiddleDown></LegoInputBackgroundMiddleDown>
      </LegoInputBackgroundMiddle>
      <LegoInputBackgroundRight>
        <LegoInputBackgroundRightUp></LegoInputBackgroundRightUp>
        <LegoInputBackgroundRightMiddle></LegoInputBackgroundRightMiddle>
        <LegoInputBackgroundRightDown></LegoInputBackgroundRightDown>
      </LegoInputBackgroundRight>
    </LegoInputContainer>
  )
}