import React from "react";
import { Input } from "antd";
import optimizeBackground from "../../assets/optimizeBackground.svg";

interface OptimizedTextAreaProps {
  value: string;
  onChange: (value: string) => void;
}

const OptimizedTextArea: React.FC<OptimizedTextAreaProps> = ({
  value,
  onChange,
}) => (
  <div
    style={{
      width: "490px",
      height: "325px",
    }}
  >
    <Input.TextArea
      value={value}
      onChange={(event) => onChange(event.target.value)}
      style={{
        lineHeight: "2",
        fontSize: "20px",
        backgroundImage: `url(${optimizeBackground})`,
        backgroundSize: "cover",
        border: "none",
        paddingTop: "10px",
        paddingLeft: "20px",

        width: "100%",
        height: "100%",
        overflow: "auto", // 新增此行代码
      }}
      readOnly
      placeholder="promptLego"
    />
  </div>
);
export default OptimizedTextArea;
