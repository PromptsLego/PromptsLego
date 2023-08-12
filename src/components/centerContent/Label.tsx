import { styled } from "styled-components";

const StyledLabel = styled.p`
  font-size: 2rem;
  margin: 1rem;
`;

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return <StyledLabel>{"▍" + text}</StyledLabel>;
};

export default Label;
