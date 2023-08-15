import Navigator from "./Navigator";
import Choices from "./Choices";
import RightBox from "@/assets/RightBox.svg";
import Cancel from "@/assets/cancel.svg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid var(--color-grey-900);
  border-radius: var(--border-radius-lg);
  padding: 2rem 3rem 0;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  width: 13.5rem;
  height: 2.8rem;
`;

const CancelButton = styled.img`
  width: 5rem;
  height: 2rem;
`;

const ChoiceDiv = styled.div`
  overflow-y: auto;
`;

interface RightSiderProps {}

const RightSider: React.FC<RightSiderProps> = ({}) => {
  return (
    <Container>
      <Header>
        <Logo src={RightBox} />
      </Header>
      <Navigator />
      <ChoiceDiv>
        <Choices />
      </ChoiceDiv>
    </Container>
  );
};

export default RightSider;
