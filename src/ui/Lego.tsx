import styled from "styled-components";
import { LegoImageUrl } from "@/utils/lego";
import left from "@/assets/legoLeft.png";
import middle from "@/assets/legoMiddle.png";
import right from "@/assets/legoRight.png";

interface LegoProps {
  color: string;
}

const LegoContainer = styled.div`
  display: flex;
`;

const LegoContent = styled.div<LegoProps>`
  /* background-image: url(${(props) => LegoImageUrl(props.color)}); */
  background-image: url(${middle});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  white-space: nowrap; /* 禁止文字换行 */
  overflow: hidden; /* 隐藏溢出部分 */
  line-height: 1;
  padding: 0.7rem 1.5rem 0.7rem 1.3rem;
  font-size: 1.3rem;
`;

const LegoLeft = styled.img`
  height: 3rem;
`;

const LegoRight = styled.img`
  height: 3rem;

  // 为了解决缝隙问题
  margin-left: -0.1rem;
`;

const Lego: React.FC<React.HTMLAttributes<HTMLDivElement> & LegoProps> = ({
  color,
  children,
  ...props
}) => {
  return (
    <LegoContainer>
      <LegoLeft src={left} alt="" />
      <LegoContent color={color} {...props}>
        {children}
      </LegoContent>
      <LegoRight src={right} alt="" />
    </LegoContainer>
  );
};

export default Lego;
