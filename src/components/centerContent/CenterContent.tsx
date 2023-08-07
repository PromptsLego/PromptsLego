import { Content } from "antd/es/layout/layout";
import Lego from "../lego/Lego";
import Label from "./Label";
import { useContext } from "react";
import ContentContext from "../../contexts/ContentContext";
import FrozeButton from "./FrozeButton";

interface CenterContentProps { }

const CenterContent: React.FC<CenterContentProps> = ({ }) => {
  const { current, SetCurrent } = useContext(ContentContext);

  return (
    <Content
      style={{
        position: "relative",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        paddingLeft: "50px",
        paddingRight: "50px",
        // justifyContent: "space-between",
      }}
    >
      <div style={{ alignSelf: "flex-end", marginRight: "10px" }}>
        <FrozeButton></FrozeButton>
      </div>
      <div style={{
        position: "absolute",
        left:"10%",
        right:"10%",
        top:"0",
        bottom:"10%",
        overflowY:"auto"
      }}>
        {current.map((item) => {
          return (
            <>
              {item.children.length === 0 ? (
                <></>
              ) : (
                <Label text={item.category} />
              )}
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {item.children.map((child) => {
                  return (
                    <Lego
                      keyWord={child.keyWord}
                      detail={child.detail}
                      useTime={child.useTime}
                      color={child.color}
                      legoType="lego"
                      varNum={child.varNum}
                    />
                  );
                })}
              </div>
            </>
          );
        })}
      </div>

    </Content>
  );
};

export default CenterContent;
