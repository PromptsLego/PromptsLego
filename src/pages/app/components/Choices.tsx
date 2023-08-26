import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import React, { useRef } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import ChoiceLego from "./ChoiceLego";
import { styled } from "styled-components";
import { useAppSelector, useAppDispatch } from "@/contexts/hooks";
import { useImmer } from "use-immer";
import {
  FavoriteType,
  favorite,
  favoriteEdit,
  favoriteRemove,
} from "../ContentSlice";
const ChoiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

type FavoriteLabelState = "normal" | "edit";

const FavoriteLabel = (props: { favorite: FavoriteType }) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const { selectCategory, globalData } = useAppSelector(
    (state) => state.content
  );
  const [state, setState] = useImmer<FavoriteLabelState>("normal");
  const [name, setName] = useImmer<string>(props.favorite.name);
  const onFocus = () => {
    setState("edit");
  };
  const onBlur = () => {
    setState("normal");
    if (name == "") {
      setName(props.favorite.name);
    } else {
      var count = 0;
      for (let i = 0; i < globalData.tables[0].minorCategories.length; i++) {
        if (globalData.tables[0].minorCategories[i].name == name) {
          count++;
          break;
        }
      }
      if (count == 0) {
        const newFavorite: FavoriteType = {
          name: name,
          number: props.favorite.number,
          legos: props.favorite.legos,
        };
        const oldFavorite: FavoriteType = {
          name: props.favorite.name,
          number: props.favorite.number,
          legos: props.favorite.legos,
        };
        dispatch(favoriteEdit({ oldFavorite, newFavorite }));
      } else {
        setName(props.favorite.name);
      }
    }
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code == "Enter") {
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };
  const onRemove = () => {
    const oldFavorite: FavoriteType = {
      name: props.favorite.name,
      number: props.favorite.number,
      legos: props.favorite.legos,
    };
    dispatch(favoriteRemove(oldFavorite));
  };
  const defaultText =
    props.favorite.name + " " + props.favorite.number?.toString();
  const text = <div>{defaultText}</div>;
  const edit = (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <input
        ref={inputRef}
        value={state == "edit" ? name : defaultText}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onClick={(event) => {
          event.stopPropagation();
        }}
        style={{ border: state == "edit" ? "1px solid black" : "none" }}
      ></input>
      <div style={{ flexGrow: "1" }}></div>
      <button
        style={{
          paddingLeft: "10px",
          border: "none",
          background: "none",
          fontWeight: "bold",
        }}
        onClick={onRemove}
      >
        x
      </button>
    </div>
  );
  return <div>{selectCategory == "收藏" ? edit : text}</div>;
};

interface ChoicesProp {}
const Choices: React.FC<ChoicesProp> = ({}) => {
  const { selectCategory, globalData } = useAppSelector(
    (state) => state.content
  );
  const table = globalData?.tables?.find(
    (table) => table.category === selectCategory
  );
  const minorCategories = table?.minorCategories;
  const items: CollapseProps["items"] = minorCategories?.map(
    (minorCategory, index) => {
      return {
        key: index,
        label: <FavoriteLabel favorite={minorCategory} />,
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
