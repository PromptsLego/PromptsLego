import { Layout } from "antd";
import { Footer, Header } from "antd/es/layout/layout";
import { FC } from "react";
import CenterContent from "../../components/centerContent/CenterContent";
import LeftSider from "../../components/leftSider/LeftSider";
import RightSider from "../../components/rightSider/RightSider";
import Logo from "../../components/logo/Logo";
import ButtonLogo from "../../components/logo/ButtonLogo";

const App: FC = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ backgroundColor: "white", height: "80px" }}>
        <Logo></Logo>
      </Header>
      <Layout style={{ height: "85%" }}>
        <LeftSider />
        <CenterContent />
        <RightSider />
      </Layout>
      <Footer
        style={{
          height: "5%",
          display: "flex",
          backgroundColor: "white",
          color: "white",
        }}
      >
        <ButtonLogo></ButtonLogo>
      </Footer>
    </Layout>
  );
};

export default App;
