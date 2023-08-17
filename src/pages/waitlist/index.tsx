import React, { FC, createContext } from "react";
import banner from "./static/banner.svg";
import description from "./static/description.svg";
import EmailForm from "./components/EmailForm";
import low_gray from "./static/low-gray.svg";
import low_color from "./static/low-color.svg";
import styled from "styled-components";

const App = styled.div`
  text-align: center;
  overflow-x: hidden;
`;

const AppLogo = styled.img`
  max-width: none;
  width: 100rem;
  pointer-events: none;
  margin-bottom: 3rem;

  @media (max-width: 62.5rem) {
    width: 80vw;
  }
`;

const AppDescription = styled.img`
  max-width: none;

  width: 80rem;
  pointer-events: none;
  margin-bottom: 3rem;

  @media (max-width: 62.5rem) {
    width: 70vw;
  }
`;

const AppHeader = styled.header`
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
`;

const AppBottom = styled.div`
  position: absolute;
  top: 100vh;
  right: 0vh;
  left: 0vh;
  color: gray;
`;

const Img = styled.img`
  max-width: none;

  position: absolute;
  width: 100vw;
  left: 0;
  bottom: 0;
`;

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
      <App>
        <AppHeader>
          <AppLogo src={banner} alt="banner" />
          <AppDescription src={description} alt="banner" />
          <EmailForm />
        </AppHeader>
        <Img src={submitSuccess ? low_color : low_gray} alt="banner" />
        <AppBottom>
          <div>©2023 PromptsLego. All rights reserved.</div>
          <a href="http://beian.miit.gov.cn/">浙ICP备2023014261</a>
        </AppBottom>
      </App>
    </GlobalContext.Provider>
  );
};

export default Waitlist;
