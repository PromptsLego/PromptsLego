import { loadLegoImage } from "@/utils/lego";
import styled from "styled-components";

interface LegoProps {
  color: string;
}

const LegoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 3rem;
  z-index: 9999;
`;

const LegoMiddle = styled.div`
  position: relative;
  flex-grow:1;
  height: "100%";
  display: flex;
`;

const LegoMiddleContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1;
  font-size: 1.3rem;
  box-sizing: content-box;
  height: "100%";
`;

const LegoMiddleBackground = styled.div<LegoProps>`
  position: absolute;
  height: 100%;
  width: 105%;
  background-image: url(${(props) => loadLegoImage(props.color, "M")});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const LegoLeft = styled.img`
  position: relative;
  height: 100%;
  width: 1.5rem;
`;

const LegoRight = styled.img`
  position: relative;
  height: 100%;
  width: 1.5rem;
`;

const Lego: React.FC<React.HTMLAttributes<HTMLDivElement> & LegoProps> = ({
  color,
  children,
  ...props
}) => {
  return (
    <LegoContainer>
      <LegoLeft src={loadLegoImage(color, "L")} alt="" />
      <LegoMiddle >
      
      <LegoMiddleBackground color={color} ></LegoMiddleBackground>
      <LegoMiddleContent {...props}>{children}</LegoMiddleContent>
      </LegoMiddle>
      <LegoRight src={loadLegoImage(color, "R")} alt="" />
    </LegoContainer>
  );
};

export default Lego;
