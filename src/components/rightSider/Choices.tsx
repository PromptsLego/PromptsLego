import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import React, { useContext, useState } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import Lego from "../lego/Lego";
import ContentContext from "../../contexts/ContentContext";

interface ChoicesProp {}
const Choices: React.FC<ChoicesProp> = ({}) => {
  const { select, globalData } = useContext(ContentContext);
  const table = globalData?.tables?.find((table) => table.category === select);
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
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {minorCategory.legos?.map((lego, lego_index) => {
              return (
                <Lego
                  keyWord={lego.keyWord!}
                  detail={lego.detail}
                  useTime={lego.useTime!}
                  color={lego.color}
                  style={{ margin: "5px" }}
                  legoType="choice"
                  varNum={lego.varNum === undefined ? 0 : lego.varNum}
                  category=""
                  key={index + ":" + lego_index}
                />
              );
            })}
          </div>
        ),
      };
    }
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
