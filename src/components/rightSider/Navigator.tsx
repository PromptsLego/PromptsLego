import { useContext } from "react";
import Lego from "../lego/Lego";
import ContentContext from "../../contexts/ContentContext";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface NavigatorProps {}

const Navigator: React.FC<NavigatorProps> = ({}) => {
  const { select, SetSelect, globalData } = useContext(ContentContext);

  return (
    <Container>
      {globalData.categories?.map((category, index) => {
        const isSelected = select === category.name;
        return (
          <Lego
            keyWord={category.name!}
            color={isSelected ? category.color : "white"}
            legoType="navigator"
            varNum={0}
            category=""
            key={index}
          />
        );
      })}
    </Container>
  );
};

export default Navigator;
