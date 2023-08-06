import Sider from "antd/es/layout/Sider";
import Navigator from "./Navigator";
import Choices from "./Choices";
import RightBox from "../../assets/RightBox.svg";
import Cancel from "../../assets/cancel.svg";
import { useEffect, useRef, useState } from "react";
import { useImmer } from "use-immer";

interface RightSiderProps {}

interface ScrollState{
  speed:number,
  top:number
}

const RightSider: React.FC<RightSiderProps> = ({}) => {
  
  return (
    // <div style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
    <Sider
      style={{
        position: "relative",
        backgroundColor: "white",
        borderColor: "black",
        borderStyle: "solid",
        borderRadius: "10px",
        paddingTop: "20px",
        paddingBottom: "20px",
        width: "100%",
        height: "100%",
        paddingLeft: "30px",
      }}
      width={"40%"}
    >
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <img
          src={RightBox}
          style={{
            width: "135px",
            height: "28px",
          }}
        />
        <img
          src={Cancel}
          style={{
            marginLeft: "auto",
            width: "50px",
            height: "20px",
          }}
        />
      </div>
      <Navigator />
      <div
      style = 
      {{
        position:"absolute",
        top: "120px", 
        right: "20px", 
        bottom: "20px", 
        left: "20px",
        overflowY:"scroll"
      }}>
        <Choices />
      </div>
    </Sider>
    // </div>
  );
};

export default RightSider;
