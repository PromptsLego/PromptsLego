import { PropsWithChildren, createContext, useState } from "react";
import { LegoType } from "../components/lego/LegoType";
import { data } from "../data/data";
import { DataType } from "../data/DataType";

export type ContentContextType = {
  details: { category: string; details: string[] }[];
  SetDetails: (details: { category: string; details: string[] }[]) => void;
  activeTextArea: string;
  SetActiveTextArea: (activeTextArea: string) => void;
  select: string;
  SetSelect: (select: string) => void;
  current: {
    category: string;
    children: LegoType[];
  }[];
  SetCurrent: (current: ContentContextType["current"]) => void;
  mouseStatus: "default" | "frozen";
  SetMouseStatus: (mouseStatus: ContentContextType["mouseStatus"]) => void;
  globalData: DataType;
  SetGlobalData: (data: ContentContextType["globalData"]) => void;
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
  const [details, SetDetails] = useState<
    { category: string; details: string[] }[]
  >([]);
  const [activeTextArea, SetActiveTextArea] = useState("default");
  const [select, SetSelect] = useState("");
  const [current, SetCurrent] = useState<ContentContextType["current"]>([]);
  const [mouseStatus, SetMouseStatus] =
    useState<ContentContextType["mouseStatus"]>("default");
  const [globalData, SetGlobalData] = useState<DataType>(data);

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
