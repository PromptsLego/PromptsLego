import styled from "styled-components";
import React, { useRef } from "react";
import CurrentLego from "./CurrentLego";
import { useAppSelector } from "@/contexts/hooks";
import { useImmer } from "use-immer";
import InputBackgroundLegoLeft from "@/assets/inputBackgroungLegoLeft.png"
import InputBackgroundLegoMiddle from "@/assets/inputBackgroungLegoMiddle.png"
import InputBackgroundLegoRight from "@/assets/inputBackgroungLegoRight.png"


const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0rem 3rem;
  overflow-y: auto;
`;

const LegoContainer = styled.div`
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
  height: 18rem;
  width: auto;
  display: flex;
  justify-content: space-between;
`;

const LegoInputBackgroundLeft = styled.div`
  height: 100%;
  width: 0.8rem;
  background-image: url(${InputBackgroundLegoLeft});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;  
const LegoInputBackgroundMiddle = styled.div`
  height: 100%;
  flex-grow:1;
  min-width: 1rem;
  background-image: url(${(props) => InputBackgroundLegoMiddle});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;  
const LegoInputBackgroundRight = styled.div`
  height: 100%;
  width: 1.4rem;
  background-image: url(${(props) => InputBackgroundLegoRight});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;  

interface CenterContentProps { }

const CenterContent: React.FC<CenterContentProps> = ({ }) => {
  const { current } = useAppSelector((state) => state.content);

  return (
    <Container>
      <LegoInputContainer>
        <LegoInputBackgroundLeft></LegoInputBackgroundLeft>
        <LegoInputBackgroundMiddle></LegoInputBackgroundMiddle>
        <LegoInputBackgroundRight></LegoInputBackgroundRight>
      </LegoInputContainer>
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
