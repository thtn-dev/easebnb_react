import Content from "./components/Content";
import Header from "./components/Header";
import { ReactNode } from "react";

function DefaultLayout({children}: { children: ReactNode }) {
  return ( <>
    <Header/>
    <Content>
      {children}
    </Content>
  </> );
}

export default DefaultLayout;