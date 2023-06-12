import { FC } from "react";
import "antd/dist/reset.css";
import { ContentContextProvider } from "./contexts/ContentContext";
import Main from "./Main";

const App: FC = () => {
  return (
    <ContentContextProvider>
      <Main />
    </ContentContextProvider>
  );
};

export default App;
