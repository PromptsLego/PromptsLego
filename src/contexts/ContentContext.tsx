import { PropsWithChildren, createContext, useState } from "react";
import { LegoType } from "../components/lego/LegoType";
import { data } from "../data/data";
import { DataType } from "../data/DataType";
import { Updater, useImmer } from "use-immer";

export type ContentContextType = {
  details: { category: string; details: string[] }[];
  SetDetails: Updater<{ category: string; details: string[] }[]>;
  activeTextArea: string;
  SetActiveTextArea: Updater<string>;
  select: string;
  SetSelect: Updater<string>;
  current: {category: string;children: LegoType[];}[];
  SetCurrent: Updater<ContentContextType["current"]>;
  mouseStatus: "default" | "frozen";
  SetMouseStatus: Updater<ContentContextType["mouseStatus"]>;
  globalData: DataType;
  SetGlobalData: Updater<ContentContextType["globalData"]>;
};

const ContentContext = createContext<ContentContextType>({
  details: [],
  SetDetails: () => {},
  activeTextArea: "default",
  SetActiveTextArea: () => {},
  select: "",
  SetSelect: () => {},
  current: [],
  SetCurrent: () => {},
  mouseStatus: "default",
  SetMouseStatus: () => {},
  globalData: {},
  SetGlobalData: () => {},
});

const ContentContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [details, SetDetails] = useImmer<
    { category: string; details: string[] }[]
  >([]);
  const [activeTextArea, SetActiveTextArea] = useImmer("default");
  const [select, SetSelect] = useImmer("");
  const [current, SetCurrent] = useImmer<ContentContextType["current"]>([]);
  const [mouseStatus, SetMouseStatus] =
  useImmer<ContentContextType["mouseStatus"]>("default");
  const [globalData, SetGlobalData] = useImmer<DataType>(data);

  return (
    <ContentContext.Provider
      value={{
        details: details,
        SetDetails: SetDetails,
        activeTextArea: activeTextArea,
        SetActiveTextArea: SetActiveTextArea,
        select: select,
        SetSelect: SetSelect,
        current: current,
        SetCurrent: SetCurrent,
        mouseStatus: mouseStatus,
        SetMouseStatus: SetMouseStatus,
        globalData: globalData,
        SetGlobalData: SetGlobalData,
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
};

export default ContentContext;
export { ContentContextProvider };
