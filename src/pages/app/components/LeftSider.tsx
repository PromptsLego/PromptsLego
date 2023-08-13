import { useState } from "react";
import copyImage from "@/assets/copyImage.svg";
import optimizeImage from "@/assets/optimizeImage.svg";
import collectImage from "@/assets/collectImage.svg";
import dropImage from "@/assets/dropImage.svg";
import { config } from "@/config";
import styled from "styled-components";
import TextArea from "@/ui/TextArea";
import { useAppDispatch, useAppSelector } from "@/contexts/hooks";
import { dropAll, favorite } from "../ContentSlice";

const YOUR_GENERATED_SECRET = config.jina_key;

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
  const [optimizedTextAreaValue, SetOptimizedTextAreaValue] = useState("");

  const { activeTextArea, current, details, globalData } = useAppSelector(
    (state) => state.content
  );
  const dispatch = useAppDispatch();

  const output = details
    .map((detail) => {
      if (detail.details.length === 0) return;
      return "▎" + detail.category + ": " + detail.details.join("\n");
    })
    .join("\n");

  const copyToClipboard = () => {
    const textToCopy =
      activeTextArea === "default"
        ? details
            .map((detail) => {
              return "▎" + detail.category + ": " + detail.details.join("\n");
            })
            .join("\n")
        : optimizedTextAreaValue;
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };
  const handleCopy = () => {
    copyToClipboard();
  };
  const handleDrop = () => {
    // SetOptimizedTextAreaValue("");
    dispatch(dropAll);
  };

  const handleOptimize = async () => {
    // const prompt = details
    //   .map((detail) => {
    //     return "▎" + detail.category + ": " + detail.details.join("\n");
    //   })
    //   .join("\n");
    // const targetModel = "chatgpt";
    // const apiKey = YOUR_GENERATED_SECRET; // 将此处替换为你的实际API密钥
    // if (apiKey === undefined) {
    //   console.log(
    //     "ChatGPT API key not found. Please set the YOUR_GENERATED_SECRET variable."
    //   );
    // } else {
    //   try {
    //     console.log("Optimizing...");
    //     const response = await promptperfect(prompt, targetModel, apiKey);
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const responseBody = await response.json(); // 解析返回的JSON响应体
    //     const optimizedText = responseBody.result.promptOptimized; // 假设响应体中有一个名为"optimizedText"的字段
    //     console.log("Optimized text:", optimizedText);
    //     SetOptimizedTextAreaValue(optimizedText);
    //     SetActiveTextArea("optimized");
    //   } catch (error) {
    //     console.error(error); // 如果发生错误，输出到控制台
    //   }
    // }
  };

  const handleFavorite = () => {
    dispatch(favorite);
  };

  return (
    <Container>
      <TextArea value={output} readOnly placeholder="promptLego" />
      <TextArea
        value={optimizedTextAreaValue}
        readOnly
        placeholder="promptLego"
      />
      <ButtonContainer>
        <CopyButton onClick={handleCopy}></CopyButton>
        <OptimizeButton onClick={handleOptimize}></OptimizeButton>
        <FavoriteButton onClick={handleFavorite}></FavoriteButton>
        <DropButton onClick={handleDrop}></DropButton>
      </ButtonContainer>
    </Container>
  );
};

export default LeftSider;
