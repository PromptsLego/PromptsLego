import styled from "styled-components";
import React, { useRef } from "react";
import CurrentLego from "./CurrentLego";
import { useAppSelector } from "@/contexts/hooks";
import { useImmer } from "use-immer";
import InputBackgroundLegoLeftUp from "@/assets/inputBackgroungLegoLeftUp.png"
import InputBackgroundLegoLeftMiddle from "@/assets/inputBackgroungLegoLeftMiddle.png"
import InputBackgroundLegoLeftDown from "@/assets/inputBackgroungLegoLeftDown.png"
import InputBackgroundLegoMiddleUp from "@/assets/inputBackgroungLegoMiddleUp.png"
import InputBackgroundLegoMiddleDown from "@/assets/inputBackgroungLegoMiddleDown.png"
import InputBackgroundLegoRightUp from "@/assets/inputBackgroungLegoRightUp.png"
import InputBackgroundLegoRightMiddle from "@/assets/inputBackgroungLegoRightMiddle.png"
import InputBackgroundLegoRightDown from "@/assets/inputBackgroungLegoRightDown.png"


const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0rem 3rem;
  overflow-y: auto;
`;

const LegoContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Label = styled.p`
  font-size: 1.8rem;
  margin: 1rem;
`;

const LegoInputContainer = styled.div`
  position: relative;
  height: auto;
  width: auto;
  display: flex;
  justify-content: space-between;
`;

const LegoInputBackgroundLeft = styled.div`
  height: 100%;
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
  height: 100%;
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
  height: 100%;
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

const LegoInputInputBox = () => {
  return (
    <LegoInputContainer>
      <LegoInputBackgroundLeft>
        <LegoInputBackgroundLeftUp></LegoInputBackgroundLeftUp>
        <LegoInputBackgroundLeftMiddle></LegoInputBackgroundLeftMiddle>
        <LegoInputBackgroundLeftDown></LegoInputBackgroundLeftDown>
      </LegoInputBackgroundLeft>
      <LegoInputBackgroundMiddle>
        <LegoInputBackgroundMiddleUp></LegoInputBackgroundMiddleUp>
        <LegoInputBackgroundMiddleMiddle></LegoInputBackgroundMiddleMiddle>
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

interface CenterContentProps { }

const CenterContent: React.FC<CenterContentProps> = ({ }) => {
  const { current } = useAppSelector((state) => state.content);
  return (
    <Container>
      <LegoInputInputBox/>
      {current.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item.children.length === 0 ? null : (
              <Label key={"label:" + index}>{"▎" + item.category}</Label>
            )}
            <LegoContainer key={"container:" + index}>
              {item.children.map((child, lego_index) => {
                return (
                  <CurrentLego
                    keyWord={child.keyWord}
                    detail={child.detail}
                    useTime={child.useTime}
                    color={child.color}
                    category={item.category}
                    varNum={child.varNum}
                    key={index + ":" + lego_index}
                  />
                );
              })}
            </LegoContainer>
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default CenterContent;
