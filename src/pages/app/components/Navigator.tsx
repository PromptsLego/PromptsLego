import { useContext } from "react";
import ContentContext from "@/contexts/ContentContext";
import styled from "styled-components";
import NavigatorLego from "./NavigatorLego";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

interface NavigatorProps {}

const Navigator: React.FC<NavigatorProps> = ({}) => {
  const { select, SetSelect, globalData } = useContext(ContentContext);

  return (
    <Container>
      {globalData.categories?.map((category, index) => {
        const isSelected = select === category.name;
        return (
          <NavigatorLego
            keyWord={category.name!}
            color={isSelected ? category.color : "white"}
            key={index}
          />
        );
      })}
    </Container>
  );
};

export default Navigator;
