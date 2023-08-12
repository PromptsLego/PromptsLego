import React, { useContext } from "react";
import { Button } from "antd";
import ContentContext from "../../contexts/ContentContext";
import NotFrozeImage from "../../assets/ForzenNotSelect.svg";
import FrozeImage from "../../assets/FrozenSelect.svg";
const StatusButton: React.FC = () => {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error("StatusButton must be used within a ContentProvider");
  }

  const { mouseStatus, SetMouseStatus } = context;

  const toggleStatus = () => {
    SetMouseStatus(mouseStatus === "default" ? "frozen" : "default");
  };

  return (
    <Button
      //   type="primary"
      onClick={toggleStatus}
      style={{
        zIndex: "1",
        backgroundImage:
          mouseStatus === "default"
            ? `url(${NotFrozeImage})`
            : `url(${FrozeImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "60px",
        height: "60px",
        border: "none",
        borderColor: "transparent",
      }}
    >
      {/* {mouseStatus === "default" ? "default" : "frozen"} */}
    </Button>
  );
};

export default StatusButton;
