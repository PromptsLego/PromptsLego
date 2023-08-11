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
import './LeftSider.css'
import textboxBackgroundCorner from "../../assets/textboxBackgroundCorner.png"
import textboxBackgroundHorizontal from "../../assets/textboxBackgroundHorizontal.png"
import textboxBackgroundVertical from "../../assets/textboxBackgroundVertical.png"

const YOUR_GENERATED_SECRET = config.jina_key;

interface LeftSiderProps { }

const LeftSider: React.FC<LeftSiderProps> = ({ }) => {
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
        position: "relative",
        backgroundColor: "white",
        height: "100%",
        display: "flex",
        paddingLeft: "58px",
      }}
      width={"30%"}
    >
      <div
        className={"textbox_container"}
        style={{
          position: "absolute",
          height: "40%",
          left: "10%",
          right: "0%",
        }}>
        <div
          className="textbox_corner"
          style={{
            backgroundImage: `url(${textboxBackgroundCorner})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="textbox_horizontal_bar"
          style={{
            backgroundImage: `url(${textboxBackgroundHorizontal})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="textbox_vertical_bar"
          style={{
            backgroundImage: `url(${textboxBackgroundVertical})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="textbox_textbox"
          style={{ position: "relative" }}
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
              position: "absolute",
              lineHeight: "2",
              fontSize: "16px",
              overflowY: "auto",
              resize: "none",
              width: "95%",
              top: "0%",
              bottom: "5%",
              backgroundColor:"transparent",
              border:"0"
            }}
          />
        </div>
      </div>
      <div
        className={"textbox_container"}
        style={{
          position: "absolute",
          top: "48%",
          height: "40%",
          left: "10%",
          right: "0%",
          backgroundColor: "#cccccc"
        }}>
        <div
          className="textbox_corner"
          style={{
            backgroundImage: `url(${textboxBackgroundCorner})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="textbox_horizontal_bar"
          style={{
            backgroundImage: `url(${textboxBackgroundHorizontal})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="textbox_vertical_bar"
          style={{
            backgroundImage: `url(${textboxBackgroundVertical})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="textbox_textbox"
          style={{ position: "relative" }}
        >
          <Input.TextArea
            value={optimizedTextAreaValue}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              SetOptimizedTextAreaValue(event.target.value)
            }
            style={{
              position: "absolute",
              lineHeight: "2",
              fontSize: "16px",
              overflowY: "auto",
              resize: "none",
              width: "95%",
              top: "0%",
              bottom: "5%",
              backgroundColor:"transparent",
              border:"0"
            }}
            readOnly
            placeholder="promptLego"
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "flex-end",
          top: "93%",
          height: "10%",
          left: "10%",
          right: "0%",
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
