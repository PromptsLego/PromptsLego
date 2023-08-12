import { useContext, useState } from "react";
// import { Button, Input } from "antd";
import ContentContext from "../../contexts/ContentContext";
import copyImage from "../../assets/copyImage.svg";
import optimizeImage from "../../assets/optimizeImage.svg";
import collectImage from "../../assets/collectImage.svg";
import dropImage from "../../assets/dropImage.svg";
import promptperfect from "../textArea/PromptPerfect";
import { config } from "../../config";
import styled from "styled-components";
import TextAreaContainer from "./TextAreaContainer";

const YOUR_GENERATED_SECRET = config.jina_key;

interface LeftSiderProps {}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  gap: 1rem;
`;

const TextArea = styled.textarea`
  font-size: 1.6rem;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 0;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface ButtonProps {
  $image: string;
  $width: string;
  $height: string;
}

const Button = styled.button<ButtonProps>`
  background-image: url(${(props) => props.$image});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border: none;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const LeftSider: React.FC<LeftSiderProps> = ({}) => {
  const [optimizedTextAreaValue, SetOptimizedTextAreaValue] = useState("");
  const { activeTextArea, SetActiveTextArea } = useContext(ContentContext);
  const { current, SetCurrent } = useContext(ContentContext);
  const { details, SetDetails } = useContext(ContentContext);
  const { globalData, SetGlobalData } = useContext(ContentContext);

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
    SetActiveTextArea("default");
    SetCurrent([]);
    SetOptimizedTextAreaValue("");
    SetDetails([]);
  };
  const handleOptimize = async () => {
    const prompt = details
      .map((detail) => {
        return "▎" + detail.category + ": " + detail.details.join("\n");
      })
      .join("\n");
    const targetModel = "chatgpt";
    const apiKey = YOUR_GENERATED_SECRET; // 将此处替换为你的实际API密钥
    if (apiKey === undefined) {
      console.log(
        "ChatGPT API key not found. Please set the YOUR_GENERATED_SECRET variable."
      );
    } else {
      try {
        console.log("Optimizing...");
        const response = await promptperfect(prompt, targetModel, apiKey);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseBody = await response.json(); // 解析返回的JSON响应体
        const optimizedText = responseBody.result.promptOptimized; // 假设响应体中有一个名为"optimizedText"的字段
        console.log("Optimized text:", optimizedText);
        SetOptimizedTextAreaValue(optimizedText);
        SetActiveTextArea("optimized");
      } catch (error) {
        console.error(error); // 如果发生错误，输出到控制台
      }
    }
  };
  const handleFavorite = () => {
    const favorites = globalData.tables![0]!.minorCategories!;
    const favoriteLegos: {
      keyWord?: string;
      detail?: string;
      useTime?: number;
      color?: string;
      varNum?: number;
    }[] = [];
    current.map((item) => {
      item.children.map((child) => {
        favoriteLegos.push({
          keyWord: child.keyWord,
          detail: child.detail,
          useTime: child.useTime,
          color: child.color,
          varNum: child.varNum,
        });
      });
    });
    if (favoriteLegos.length === 0) return;
    favorites.push({
      name: "未命名",
      number: favoriteLegos.length,
      legos: favoriteLegos,
    });
    SetGlobalData({ ...globalData });
  };

  return (
    <Container>
      <TextAreaContainer>
        <TextArea value={output} readOnly placeholder="promptLego" />
      </TextAreaContainer>
      <TextAreaContainer>
        <TextArea
          value={optimizedTextAreaValue}
          readOnly
          placeholder="promptLego"
        />
      </TextAreaContainer>
      <ButtonContainer>
        <Button
          $image={copyImage}
          $width={"8.8rem"}
          $height={"4.2rem"}
          onClick={handleCopy}
        ></Button>
        <Button
          $image={optimizeImage}
          $width={"4.2rem"}
          $height={"4.2rem"}
          onClick={handleOptimize}
        ></Button>
        <Button
          $image={collectImage}
          $width={"4.2rem"}
          $height={"4.2rem"}
          onClick={handleFavorite}
        ></Button>
        <Button
          $image={dropImage}
          $width={"4.2rem"}
          $height={"4.2rem"}
          onClick={handleDrop}
        ></Button>
      </ButtonContainer>
    </Container>
  );
};

export default LeftSider;
