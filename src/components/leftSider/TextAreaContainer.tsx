import textboxBackgroundCorner from "../../assets/textboxBackgroundCorner.png";
import textboxBackgroundHorizontal from "../../assets/textboxBackgroundHorizontal.png";
import textboxBackgroundVertical from "../../assets/textboxBackgroundVertical.png";

import React, { ReactNode } from "react";

import styled from "styled-components";

const Container = styled.div`
  flex-grow: 1;

  border-style: solid;
  border-color: black;
  border-radius: var(--border-radius-lg);
  display: grid;
  overflow: hidden;
  grid-template-rows: 3rem auto;
  grid-template-columns: 3rem auto;
  grid-template-areas:
    "corner horizontal_bar"
    "vertical_bar textbox";
`;

const Corner = styled.div`
  grid-area: corner;
  background: url(${textboxBackgroundCorner});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const HorizontalBar = styled.div`
  grid-area: horizontal_bar;
  background: url(${textboxBackgroundHorizontal});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const VerticalBar = styled.div`
  grid-area: vertical_bar;
  background: url(${textboxBackgroundVertical});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const Textbox = styled.div`
  grid-area: textbox;
`;

type TextAreaContainerProps = {
  children: ReactNode;
};

const TextAreaContainer: React.FC<TextAreaContainerProps> = ({ children }) => {
  return (
    <Container>
      <Corner />
      <HorizontalBar />
      <VerticalBar />
      <Textbox>{children}</Textbox>
    </Container>
  );
};

export default TextAreaContainer;
