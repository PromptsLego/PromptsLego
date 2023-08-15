import textboxBackgroundCorner from "@/assets/textboxBackgroundCorner.png";
import textboxBackgroundHorizontal from "@/assets/textboxBackgroundHorizontal.png";
import textboxBackgroundVertical from "@/assets/textboxBackgroundVertical.png";

import React, { ReactNode, TextareaHTMLAttributes } from "react";

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
  background-color: #d3d3d3;
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

const TextAreaContent = styled.textarea`
  font-size: 1.6rem;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 0;
  resize: none;
  /* background-color: gray; */
`;
const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  ...props
}) => {
  return (
    <Container>
      <Corner />
      <HorizontalBar />
      <VerticalBar />
      <Textbox>
        <TextAreaContent {...props} />
      </Textbox>
    </Container>
  );
};

export default TextArea;
