import React, { useState, useEffect } from "react";
import { Menu, Button, Drawer } from "antd";
import { NavLink, Link } from "react-router-dom";
import styles from "./header.module.css";
import { MenuOutlined } from "@ant-design/icons";
// import {logo} from "./logo.png";


function Headerbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className={styles.menuIcon}>
        <MenuOutlined
          style={{ color: "white", fontSize: 30 }}
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>

      <span className={styles.headerMenu}>
        <AppMenu />
      </span>

      <Drawer
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
        bodyStyle={{ backgroundColor: "#011529" }}
        placement="right"
      >
        <AppMenu isInline />
      </Drawer>
    </>
  );
}

function AppMenu({ isInline = false }) {
  const [selectedKey, setSelectedKey] = useState("/");

  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
  };
  return (
    <Menu mode={isInline ? "inline" : "horizontal"} theme="dark" defaultSelectedKeys={[selectedKey]} onClick={handleMenuClick} style={{ display: 'block' }}>

      <Link to="/" className={styles.logoContainer} style={{ float: 'left' }}>
        <img src="../logo192.png" alt="Logo" className={styles.logo} />
      </Link>

      {/* <Menu.Item className={styles.myStyle} style={{float: 'left'}}>
        <NavLink exact to="/" activeClassName={styles.activeLink} >
          Home
        </NavLink>
      </Menu.Item> */}
      
      {/* <Menu.Item className={styles.myStyle} style={{ float: 'right' }}>
        <NavLink to="/education" activeClassName={styles.activeLink}>
          Education
        </NavLink>
      </Menu.Item>
      <Menu.Item className={styles.myStyle} style={{ float: 'right' }}>
        <NavLink to="/followup" activeClassName={styles.activeLink}>
          Followup
        </NavLink>
      </Menu.Item>
      <Menu.Item className={styles.myStyle} style={{ float: 'right' }}>
        <NavLink to="/showcase" activeClassName={styles.activeLink}>
          Showcase
        </NavLink>
      </Menu.Item>
      <Menu.Item className={styles.myStyle} style={{ float: 'right' }}>
        <NavLink to="/story" activeClassName={styles.activeLink}>
          Story
        </NavLink>
      </Menu.Item> */}

    </Menu>
  );
}

export default Headerbar;
