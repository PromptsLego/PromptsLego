import styled from "styled-components";
import NavigatorLego from "./NavigatorLego";
import { useAppSelector } from "@/contexts/hooks";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

interface NavigatorProps {}

const Navigator: React.FC<NavigatorProps> = ({}) => {
  const { selectCategory, globalData } = useAppSelector(
    (state) => state.content,
  );

  return (
    <Container>
      {globalData.categories.map((category, index) => {
        const isSelected = selectCategory === category.name;
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
