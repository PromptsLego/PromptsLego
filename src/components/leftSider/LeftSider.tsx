import { useContext, useState } from "react";
import Sider from "antd/es/layout/Sider";
import { Button, Input } from "antd";
import ContentContext from "../../contexts/ContentContext";
import copyImage from "../../assets/copyImage.svg";
import optimizeImage from "../../assets/optimizeImage.svg";
import collectImage from "../../assets/collectImage.svg";
import dropImage from "../../assets/dropImage.svg";
import promptperfect from "../textArea/PromptPerfect";
import { config } from "../../config";
import optimizeBackground from "../../assets/optimizeBackground.svg";
import inputBackground from "../../assets/inputBackground.svg";

const YOUR_GENERATED_SECRET = config.jina_key;

interface LeftSiderProps {}

const LeftSider: React.FC<LeftSiderProps> = ({}) => {
  const [optimizedTextAreaValue, SetOptimizedTextAreaValue] = useState("");
  const { activeTextArea, SetActiveTextArea } = useContext(ContentContext);
  const { current, SetCurrent } = useContext(ContentContext);
  const { details, SetDetails } = useContext(ContentContext);
  const { globalData, SetGlobalData } = useContext(ContentContext);

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
    <Sider
      style={{
        backgroundColor: "white",
        height: "100%",
        display: "flex",
        paddingLeft: "58px",
      }}
      width={"30%"}
    >
      <Input.TextArea
        value={details
          .map((detail) => {
            if (detail.details.length === 0) return;
            return "▎" + detail.category + ": " + detail.details.join("\n");
          })
          .join("\n")}
        readOnly
        placeholder="promptLego"
        style={{
          lineHeight: "2",
          fontSize: "16px",
          backgroundImage: `url(${inputBackground})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          border: "none",

          minHeight: "45%",
          overflow: "auto",
          resize: "none",
          padding: "10px 20px",
        }}
      />
      <Input.TextArea
        value={optimizedTextAreaValue}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          SetOptimizedTextAreaValue(event.target.value)
        }
        style={{
          lineHeight: "2",
          fontSize: "16px",
          backgroundImage: `url(${optimizeBackground})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          border: "none",
          padding: "10px 20px",

          minHeight: "45%",
          overflow: "auto",
          resize: "none",
        }}
        readOnly
        placeholder="promptLego"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          height: "10%",
        }}
      >
        <Button
          style={{
            backgroundImage: `url(${copyImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",

            marginLeft: "15px",
            width: "88px",
            height: "42px",
            borderColor: "transparent",
            border: "none",
          }}
          onClick={handleCopy}
        ></Button>
        <Button
          style={{
            backgroundImage: `url(${optimizeImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",

            marginLeft: "15px",
            width: "42px",
            height: "42px",
            border: "none",
            borderColor: "transparent",
          }}
          onClick={handleOptimize}
        ></Button>
        <Button
          style={{
            backgroundImage: `url(${collectImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",

            marginLeft: "15px",
            width: "42px",
            height: "42px",
            border: "none",
            borderColor: "transparent",
          }}
          onClick={handleFavorite}
        ></Button>

        <Button
          style={{
            backgroundImage: `url(${dropImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",

            marginLeft: "15px",
            width: "42px",
            height: "42px",
            border: "none",
            borderColor: "transparent",
          }}
          onClick={handleDrop}
        ></Button>
      </div>
    </Sider>
  );
};

export default LeftSider;
