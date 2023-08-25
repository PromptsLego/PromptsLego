import CenterContent from "./components/CenterContent";
import LeftSider from "./components/LeftSider";
import RightSider from "./components/RightSider";
import styled from "styled-components";
import logo from "@/assets/Logo.svg";
import bottomLogo from "@/assets/version.svg";
import { useRouteLoaderData } from "react-router-dom";
import { FavoriteType, favoriteInit } from "./ContentSlice";
import { useAppDispatch } from "@/contexts/hooks";
import { useEffect } from "react";

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 5rem auto 3rem;
  height: 100vh;
`;

const Header = styled.header`
  grid-column: 1 / -1;

  display: flex;
  align-items: center;
  padding-left: 1rem;
`;
const Footer = styled.footer`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 1rem;
`;

const Logo = styled.img`
  height: 50%;
`;

const BottomLogo = styled.img`
  height: 50%;
`;

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const favorites = useRouteLoaderData("app") as FavoriteType[];
  useEffect(() => {
    dispatch(favoriteInit(favorites));
  }, [dispatch, favorites]);

  return (
    <AppLayout>
      <Header>
        <Logo src={logo} />
      </Header>
      <LeftSider />
      <CenterContent />
      <RightSider />
      <Footer>
        <BottomLogo src={bottomLogo} />
      </Footer>
    </AppLayout>
  );
};

export default App;
