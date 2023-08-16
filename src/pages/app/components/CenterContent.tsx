import styled from "styled-components";
import React from "react";
import CurrentLego from "./CurrentLego";
import { useAppDispatch, useAppSelector } from "@/contexts/hooks";
import LegoInputBox from "@/ui/LegoInputBox";
import { input } from "../ContentSlice";
import Lego from "@/ui/Lego";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  overflow-y: auto;
  padding: 0rem 2rem;
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0rem 3rem;
  overflow-y: scroll;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

interface CenterContentProps {}

const CenterContent: React.FC<CenterContentProps> = ({}) => {
  const { current, inputContent } = useAppSelector((state) => state.content);
  const dispatch = useAppDispatch();

  function changeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    dispatch(input(e.target.value));
  }

  return (
    <Container>
      <ContentContainer>
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
      </ContentContainer>
      <LegoInputContainer>
        <Lego color="white">行动任务</Lego>
        <LegoInputBox value={inputContent} onChange={changeHandler} />
      </LegoInputContainer>
    </Container>
  );
};

export default CenterContent;
