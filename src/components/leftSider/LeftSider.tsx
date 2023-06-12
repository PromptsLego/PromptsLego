import { useContext, useState } from "react";
import TextArea from "../textArea/TextArea";
import Sider from "antd/es/layout/Sider";
import OptimizedTextArea from "../textArea/OptimizedTextArea";
import { Button } from "antd";
import ContentContext from "../../contexts/ContentContext";
import copyImage from "../../assets/copyImage.svg";
import optimizeImage from "../../assets/optimizeImage.svg";
import collectImage from "../../assets/collectImage.svg";
import dropImage from "../../assets/dropImage.svg";
import promptperfect from "../textArea/PromptPerfect";
import { config } from "../../config";

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
    let favoriteLegos: {
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
      }}
      width={"30%"}
    >
      <div
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          height: "110%",
          width: "100%",
        }}
      >
        <TextArea
          value={details
            .map((detail) => {
              if (detail.details.length === 0) return;
              return "▎" + detail.category + ": " + detail.details.join("\n");
            })
            .join("\n")}
        />
        <OptimizedTextArea
          value={optimizedTextAreaValue}
          onChange={SetOptimizedTextAreaValue}
        />
        <div
          style={{
            height: "10%",
            width: "87%",
            display: "flex",
            // justifyContent: "space-between",
            marginTop: "10px",
            // marginRight: "20px",
          }}
        >
          <Button
            style={{
              marginLeft: "120px",
              backgroundImage: `url(${copyImage})`,
              width: "25%",
              height: "58% ",
              borderColor: "transparent",
              border: "none",
              backgroundSize: "cover",
            }}
            onClick={handleCopy}
          ></Button>
          <Button
            style={{
              backgroundImage: `url(${optimizeImage})`,
              marginLeft: "20px",
              width: "13%",
              height: "60%",
              border: "none",
              borderColor: "transparent",
              backgroundSize: "cover",
            }}
            onClick={handleOptimize}
          ></Button>
          <Button
            style={{
              backgroundImage: `url(${collectImage})`,
              marginLeft: "20px",
              width: "13%",
              height: "60%",
              border: "none",
              borderColor: "transparent",
              backgroundSize: "cover",
            }}
            onClick={handleFavorite}
          ></Button>

          <Button
            style={{
              backgroundImage: `url(${dropImage})`,
              marginLeft: "20px",
              width: "13%",
              height: "60%",
              border: "none",
              borderColor: "transparent",
              backgroundSize: "cover",
            }}
            onClick={handleDrop}
          ></Button>
        </div>
      </div>
    </Sider>
  );
};

export default LeftSider;
