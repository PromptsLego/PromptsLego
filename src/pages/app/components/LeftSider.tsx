import { useState } from "react";
import { message } from "antd";
import copyImage from "@/assets/copyImage.svg";
import optimizeImage from "@/assets/optimizeImage.svg";
import collectImage from "@/assets/collectImage.svg";
import dropImage from "@/assets/dropImage.svg";
import styled from "styled-components";
import TextArea from "@/ui/TextArea";
import { useAppDispatch, useAppSelector } from "@/contexts/hooks";
import { dropAll, favorite } from "../ContentSlice";

interface LeftSiderProps {}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: none;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const CopyButton = styled(Button)`
  background-image: url(${copyImage});
  width: 8.8rem;
  height: 4.2rem;
`;

const OptimizeButton = styled(Button)`
  background-image: url(${optimizeImage});
  width: 4.2rem;
  height: 4.2rem;
`;

const FavoriteButton = styled(Button)`
  background-image: url(${collectImage});
  width: 4.2rem;
  height: 4.2rem;
`;

const DropButton = styled(Button)`
  background-image: url(${dropImage});
  width: 4.2rem;
  height: 4.2rem;
`;

const LeftSider: React.FC<LeftSiderProps> = ({}) => {
  const [ messageApi, contextHolder ] = message.useMessage();
  const { current, inputContent } = useAppSelector((state) => state.content);
  const dispatch = useAppDispatch();

  function getOuptut() {
    let output = current
      .map((category) => {
        let detail = category.children
          .map((lego) => {
            return lego.detail;
          })
          .join("");
        if (category.category === "行动任务") detail += inputContent;
        if (detail) return "# " + category.category + ": \n" + detail + "\n";
        else return "";
      })
      .join("");
    return output;
  }

  const output = getOuptut();

  const copyToClipboard = () => {
    const textarea = document.createElement("textarea");
    textarea.value = output;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    messageApi.success('Copy Success');
  };
  const handleCopy = () => {
    copyToClipboard();
  };
  const handleDrop = () => {
    dispatch(dropAll());
  };

  const handleFavorite = () => {
    dispatch(favorite());
  };

  return (
    <Container>
      <TextArea value={output} readOnly placeholder="PromptsLego" />
      <ButtonContainer>
        <CopyButton onClick={handleCopy}>{contextHolder}</CopyButton>
        <FavoriteButton onClick={handleFavorite}></FavoriteButton>
        <DropButton onClick={handleDrop}></DropButton>
      </ButtonContainer>
    </Container>
  );
};

export default LeftSider;
