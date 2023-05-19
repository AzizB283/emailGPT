import React, { useState } from "react";
import { Menu, Button } from "antd";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

function Headerbar() {
  return (
    <>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item>
          <NavLink to="/" className={styles.myStyle}>
            Template 1
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/template2" className={styles.myStyle}>
            Template 2
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/template3" className={styles.myStyle}>
            Template 3
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/template4" className={styles.myStyle}>
            Template 4
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/template5" className={styles.myStyle}>
            Template 5
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Headerbar;
