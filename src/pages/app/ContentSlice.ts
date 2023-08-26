import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/contexts/store";
import { DataType } from "@/data/DataType";
import { data } from "@/data/data";
import { createFavorites } from "@/services/favorite";
import { getEmail, getToken, hasEmail, hasToken } from "@/utils/token";

const categories = ["背景", "角色设定", "行动任务", "输出要求", "其他要求"];

export type LegoType = {
  keyWord: string;
  detail: string;
  useTime: number;
  color: string;
  varNum: number;
};

export type FavoriteType = {
  name: string;
  number: number;
  legos: Array<LegoType>;
};

export type EditFavoriteEventType = {
  oldFavorite: FavoriteType;
  newFavorite: FavoriteType;
};

// 为 slice state 定义一个类型
interface ContentState {
  inputContent: string;
  selectCategory: string;
  current: { category: string; children: LegoType[] }[];
  globalData: DataType;
}

// 使用该类型定义初始 state
const initialState: ContentState = {
  inputContent: "",
  selectCategory: "",
  current: categories.map((category) => {
    return {
      category: category,
      children: [],
    };
  }),
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
      state.inputContent = initialState.inputContent;
      state.current = initialState.current;
    },
    favoriteRemove: (state, action: PayloadAction<FavoriteType>) => {
      const favorite = action.payload;
      const index = state.globalData.tables[0].minorCategories.findIndex(
        (category) => category.name == favorite.name,
      );
      if (index >= 0) {
        state.globalData.tables[0].minorCategories.splice(index, 1);
        if (hasToken() && hasEmail()) {
          createFavorites(
            getEmail()!,
            getToken()!,
            state.globalData.tables[0].minorCategories,
          );
        }
      }
    },
    favoriteEdit: (state, action: PayloadAction<EditFavoriteEventType>) => {
      const editEvent = action.payload;
      const index = state.globalData.tables[0].minorCategories.findIndex(
        (category) => category.name == editEvent.oldFavorite.name,
      );
      if (index >= 0) {
        state.globalData.tables[0].minorCategories[index] =
          editEvent.newFavorite;
        if (hasToken() && hasEmail()) {
          createFavorites(
            getEmail()!,
            getToken()!,
            state.globalData.tables[0].minorCategories,
          );
        }
      }
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
      // 如果当前用户已登录，将收藏夹 favorites 添加到数据库中
      if (hasToken() && hasEmail()) {
        createFavorites(
          getEmail()!,
          getToken()!,
          state.globalData.tables[0].minorCategories,
        );
      }
    },
    favoriteInit: (state, action: PayloadAction<FavoriteType[]>) => {
      // 将收藏夹 favorites 添加到全局数据中
      state.globalData.tables[0].minorCategories = action.payload;
    },
    choose: (state, action: PayloadAction<LegoType>) => {
      // 查看目前选中的类型是否有对应的 category
      const targetCategory = state.current.find(
        (item) => item.category === state.selectCategory,
      );
      if (targetCategory) {
        // 如果有，将当前选中的内容添加到该 category 中
        // 查看该 category 中是否有相同的内容
        const sameLego = targetCategory.children.find(
          (item) => item.keyWord === action.payload.keyWord,
        );
        if (sameLego) return;
        // 如果没有，将当前选中的内容添加到该 category 中
        targetCategory.children.push(action.payload);
      }
    },
    drop: (state, action: PayloadAction<LegoType>) => {
      state.current.map((category) => {
        category.children = category.children.filter(
          (lego) =>
            lego.keyWord !== action.payload.keyWord ||
            lego.color !== action.payload.color,
        );
      });
    },
    edit: (state, action: PayloadAction<LegoType>) => {
      state.current.map((category) => {
        const target_lego = category.children.find(
          (lego) => lego.keyWord === action.payload.keyWord,
        );
        if (target_lego) {
          target_lego.detail = action.payload.detail;
        }
      });
    },
    input: (state, action: PayloadAction<string>) => {
      state.inputContent = action.payload;
    },
  },
});

export const {
  selectCategory,
  dropAll,
  favoriteEdit,
  favorite,
  favoriteInit,
  choose,
  drop,
  edit,
  input,
  favoriteRemove,
} = contentSlice.actions;

export default contentSlice.reducer;
