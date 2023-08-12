import Lego from "../lego/Lego";
import Label from "./Label";
import { useContext } from "react";
import ContentContext from "../../contexts/ContentContext";
import styled from "styled-components";
import React from "react";

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
`;

interface CenterContentProps {}

const CenterContent: React.FC<CenterContentProps> = ({}) => {
  const { current, SetCurrent } = useContext(ContentContext);

  return (
    <Container>
      {current.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item.children.length === 0 ? null : (
              <Label text={item.category} key={"label:" + index} />
            )}
            <LegoContainer key={"container:" + index}>
              {item.children.map((child, lego_index) => {
                return (
                  <Lego
                    keyWord={child.keyWord}
                    detail={child.detail}
                    useTime={child.useTime}
                    color={child.color}
                    category={item.category}
                    legoType="lego"
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
