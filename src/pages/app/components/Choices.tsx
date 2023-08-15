import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import ChoiceLego from "./ChoiceLego";
import { styled } from "styled-components";
import { useAppSelector } from "@/contexts/hooks";

const ChoiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

interface ChoicesProp {}
const Choices: React.FC<ChoicesProp> = ({}) => {
  const { selectCategory, globalData } = useAppSelector(
    (state) => state.content,
  );
  const table = globalData?.tables?.find(
    (table) => table.category === selectCategory,
  );
  const minorCategories = table?.minorCategories;
  const items: CollapseProps["items"] = minorCategories?.map(
    (minorCategory, index) => {
      return {
        key: index,
        label: (
          <div>
            {minorCategory.name + " " + minorCategory.number?.toString()}
          </div>
        ),
        children: (
          <ChoiceContainer>
            {minorCategory.legos?.map((lego, lego_index) => {
              return (
                <ChoiceLego
                  keyWord={lego.keyWord!}
                  detail={lego.detail}
                  useTime={lego.useTime!}
                  color={lego.color}
                  varNum={lego.varNum === undefined ? 0 : lego.varNum}
                  key={index + ":" + lego_index}
                />
              );
            })}
          </ChoiceContainer>
        ),
      };
    },
  );
  return (
    <Collapse
      defaultActiveKey={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
      ghost
      items={items}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
    />
  );
};

export default Choices;
