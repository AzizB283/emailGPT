import React, { useState } from "react";
import { Button, ConfigProvider, Layout, Space } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import styles from "./main.module.css";
import Headerbar from "../../header/Header";
import Template1 from "../templates/template1/Template1";
import Template2 from "../templates/template2/Template2";
import Template3 from "../templates/template3/Template3";
import Template4 from "../templates/template4/Template4";
import Template5 from "../templates/template5/Template5";
import Page404 from "../templates/Page404";
import "./main.css";
import Sidebar from "../templates/sidebar/Sidebar";
import Front from "../templates/front/Front";
const { Header, Footer, Sider, Content } = Layout;

function Main() {
  return (
    <>
      <Layout>
        <Header className={"headerStyle"}>
          <Headerbar />
        </Header>
        <div className="container">
          <Layout>
          {/* <Front /> */}
            <Content className={"contentStyle"}>
              <Routes>
                <Route path="/" element={<Front />} />
                <Route path="/announcement" element={<Template1 />} />
                <Route path="/education" element={<Template2 />} />
                <Route path="/followup" element={<Template3 />} />
                <Route path="/showcase" element={<Template4 />} />
                <Route path="/story" element={<Template5 />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </Content>
            {/* <Sider
              breakpoint={"lg"}
              theme="light"
              collapsedWidth={0}
              expandBehaviour="overTheTop"
              className="siderStyle"
            >
              <Sidebar/>
            </Sider> */}
          </Layout>
        </div>
        {/* <Footer className={"footerStyle"}>Footer</Footer> */}
      </Layout>
    </>
  );
}

export default Main;
