import React from "react";
import Lego from "@/ui/Lego";
import { useAppDispatch } from "@/contexts/hooks";
import { selectCategory } from "../ContentSlice";

interface NaviagatorLegoProps {
  keyWord: string;
  color: string;
}

const NavigatorLego: React.FC<NaviagatorLegoProps> = ({ keyWord, color }) => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(selectCategory(keyWord));
  };

  const LegoButton = (
    <Lego color={color} onClick={clickHandler}>
      {keyWord}
    </Lego>
  );

  return LegoButton;
};

export default NavigatorLego;
