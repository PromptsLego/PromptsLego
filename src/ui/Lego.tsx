import styled from "styled-components";
import { LegoImageUrl } from "@/utils/lego";
import LegoLeft from "@/assets/legoLeft.png";
import LegoRight from "@/assets/legoRight.png";
import LegoMiddle from "@/assets/legoMiddle.png";

interface LegoProps {
  color: string;
}

const Lego = styled.div<LegoProps>`
  background-image: url(${(props) => LegoImageUrl(props.color)});
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

export default Lego;
