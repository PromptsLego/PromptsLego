// src/components/TextArea.tsx
import inputBackground from "../../assets/inputBackground.svg";
import React from "react";
import { Input } from "antd";
import "./TextArea.css"; // 导入样式文件

interface TextAreaProps {
  value: string;
}

const TextArea: React.FC<TextAreaProps> = ({ value }) => (
  <div
    style={{
      width: "490px",
      height: "325px",
      marginBottom: "20px",
    }}
  >
    <Input.TextArea
      value={value}
      readOnly
      placeholder="promptLego"
      style={{
        lineHeight: "2",
        fontSize: "16px",
        backgroundImage: `url(${inputBackground})`,
        backgroundSize: "cover",
        border: "none",
        paddingTop: "10px",
        paddingLeft: "20px",

        width: "100%",
        height: "100%",
        overflow: "auto", // 新增此行代码
      }}
    />
  </div>
);

export default TextArea;
