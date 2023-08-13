import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/contexts/store";
import { DataType } from "@/data/DataType";
import { data } from "@/data/data";

type LegoType = {
  keyWord: string;
  detail: string;
  useTime: number;
  color: string;
  varNum: number;
};

// 为 slice state 定义一个类型
interface ContentState {
  details: { category: string; details: string[] }[];
  activeTextArea: string;
  selectCategory: string;
  current: { category: string; children: LegoType[] }[];
  globalData: DataType;
}

// 使用该类型定义初始 state
const initialState: ContentState = {
  details: [],
  activeTextArea: "default",
  selectCategory: "",
  current: [],
  globalData: data,
};

export const contentSlice = createSlice({
  name: "content",
  // `createSlice` 将从 `initialState` 参数推断 state 类型
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
      state.selectCategory = action.payload;
    },
    dropAll: (state) => {
      state.activeTextArea = "default";
      state.current = [];
      state.details = [];
    },
    favorite: (state) => {
      // 如果当前没有选中任何内容，直接返回
      if (state.current.length === 0) return;
      // 将当前选中的所有内容添加到收藏夹 favorites
      let favorites: Array<LegoType> = [];
      state.current.map((category) => {
        category.children.map((lego) => {
          favorites.push(lego);
        });
      });
      // 将收藏夹 favorites 添加到全局数据中
      state.globalData.tables[0].minorCategories.push({
        name: "未命名", /// TODO
        number: favorites.length,
        legos: favorites,
      });
    },
    choose: (state, action: PayloadAction<LegoType>) => {
      // 查看目前选中的类型是否有对应的 category
      const targetCategory = state.current.find(
        (item) => item.category === state.selectCategory
      );
      if (targetCategory) {
        // 如果有，将当前选中的内容添加到该 category 中
        // 查看该 category 中是否有相同的内容
        const sameLego = targetCategory.children.find(
          (item) => item.keyWord === action.payload.keyWord
        );
        if (sameLego) return;
        // 如果没有，将当前选中的内容添加到该 category 中
        targetCategory.children.push(action.payload);
        // 修改拼接后的内容
        const targetDetail = state.details.find(
          (item) => item.category === state.selectCategory
        );
        if (targetDetail) {
          // 如果有，将当前选中的内容添加到该 category 中
          targetDetail.details.push(action.payload.detail);
        } else {
          // 如果没有，新建一个 category，将当前选中的内容添加到该 category 中
          state.details.push({
            category: state.selectCategory,
            details: [action.payload.detail],
          });
        }
      } else {
        // 如果没有，新建一个 category，将当前选中的内容添加到该 category 中
        state.current.push({
          category: state.selectCategory,
          children: [action.payload],
        });
      }
    },
    
  },
});

export const { selectCategory, dropAll, favorite, choose } = contentSlice.actions;

export default contentSlice.reducer;
