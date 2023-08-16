import InputBackgroundLegoLeft from "@/assets/inputBackgroungLegoLeft.png";
import InputBackgroundLegoMiddle from "@/assets/inputBackgroungLegoMiddle.png";
import InputBackgroundLegoRight from "@/assets/inputBackgroungLegoRight.png";
import styled from "styled-components";

const LegoInputContainer = styled.div`
  position: relative;
  height: 18rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LegoInputBackgroundLeft = styled.div`
  height: 100%;
  width: 0.8rem;
  background-image: url(${InputBackgroundLegoLeft});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
const LegoInputBackgroundMiddle = styled.textarea`
  height: 100%;
  flex-grow: 1;
  min-width: 1rem;
  background-image: url(${InputBackgroundLegoMiddle});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  border: none;
  resize: none;
  padding: 1rem;
  user-select: text;
`;
const LegoInputBackgroundRight = styled.div`
  height: 100%;
  width: 1.4rem;
  background-image: url(${InputBackgroundLegoRight});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const LegoInputBox: React.FC<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ ...props }) => {
  return (
    <LegoInputContainer>
      <LegoInputBackgroundLeft></LegoInputBackgroundLeft>
      <LegoInputBackgroundMiddle {...props}></LegoInputBackgroundMiddle>
      <LegoInputBackgroundRight></LegoInputBackgroundRight>
    </LegoInputContainer>
  );
};

export default LegoInputBox;
