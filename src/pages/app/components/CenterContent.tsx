import styled from "styled-components";
import React from "react";
import CurrentLego from "./CurrentLego";
import { useAppSelector } from "@/contexts/hooks";

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

interface CenterContentProps {}

const CenterContent: React.FC<CenterContentProps> = ({}) => {
  const { current } = useAppSelector((state) => state.content);

  return (
    <Container>
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
