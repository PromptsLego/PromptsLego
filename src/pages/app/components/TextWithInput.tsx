import { styled } from "styled-components";

interface TextWithInput {
  str: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
`;

const StyledInput = styled.input`
  vertical-align: middle;
  font-size: 1.3rem;
  line-height: 1;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  resize: none;
`;

const StyledSpan = styled.span`
  vertical-align: middle;
`;

const TextWithInput: React.FC<TextWithInput> = ({ str }) => {
  const parts = str.split(/\{(.+?)\}/g); // 使用正则表达式拆分文本

  return (
    <Container>
      {parts.map((part, index) => {
        if (index % 2 === 0) {
          return <StyledSpan key={index}>{part}</StyledSpan>; // 直接显示非大括号内容
        } else {
          return <StyledInput key={index} defaultValue={part} />; // 将大括号内容转换为输入框
        }
      })}
    </Container>
  );
};

export default TextWithInput;
