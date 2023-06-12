import { useContext } from "react";
import Lego from "../lego/Lego";
import ContentContext from "../../contexts/ContentContext";

interface NavigatorProps {}

const Navigator: React.FC<NavigatorProps> = ({}) => {
  const { select, SetSelect, globalData } = useContext(ContentContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
      }}
    >
      {globalData.categories?.map((category, index) => {
        const isSelected = select === category.name;
        return (
          <Lego
            keyWord={category.name!}
            color={isSelected ? category.color : "white"}
            legoType="navigator"
            varNum={0}
          />
        );
      })}
    </div>
  );
};

export default Navigator;
