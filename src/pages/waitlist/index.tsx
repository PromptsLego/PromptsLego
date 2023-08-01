import React, { FC, createContext } from "react";
import banner from "./static/banner.svg";
import description from "./static/description.svg";
import "./index.css";
import EmailForm from "./components/EmailForm";
import low_gray from "./static/low-gray.svg";
import low_color from "./static/low-color.svg";

export const GlobalContext = createContext({
  submitSuccess: false,
  setSubmitSuccess: (submitSuccess: boolean) => {},
  passWaitlist: false,
  setPassWaitlist: (passWaitlist: boolean) => {},
  registered: false,
  setRegistered: (registered: boolean) => {},
});

const Waitlist: FC = () => {
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [passWaitlist, setPassWaitlist] = React.useState(false);
  const [registered, setRegistered] = React.useState(false);

  return (
    <GlobalContext.Provider
      value={{
        submitSuccess,
        setSubmitSuccess,
        passWaitlist,
        setPassWaitlist,
        registered,
        setRegistered,
      }}
    >
      <div className="App">
        <header className="App-header">
          <img src={banner} className="App-logo" alt="banner" />
          <img src={description} className="App-description" alt="banner" />
          <EmailForm />
        </header>
        <img
          src={submitSuccess ? low_color : low_gray}
          className="App-description"
          alt="banner"
          style={{
            position: "absolute",
            width: "115vw",
            height: "25vh",
            left: "-6vw",
            top: "82vh",
          }}
        />
        <div className="App-bottom">
          <div>©2023 PromptsLego. All rights reserved.</div>
          <a href="http://beian.miit.gov.cn/">浙ICP备2023014261</a>
        </div>
      </div>
    </GlobalContext.Provider>
  );
};

export default Waitlist;
