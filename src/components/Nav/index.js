import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import PrivateRoutes from "../../routes/private";

export default function Nav() {
  const location = useLocation();
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent(location.pathname.split("/")[1]);
  }, [location.pathname]);

  return (
    <Menu
      className='nav'
      onClick={(e) => setCurrent(e.key)}
      selectedKeys={[current]}
      mode="horizontal"
    >
      {PrivateRoutes?.map((item) =>
        !item.children ? (
          <Menu.Item key={item.key}>
            <Link to={item.path}>
              <img src={item.icon} alt="" />
              <span>{item.label}</span>
            </Link>
          </Menu.Item>
        ) : (
          <Menu.SubMenu
            key={item.key}
            title={item.label}
            icon={<img src={item.icon} alt="" />}
          >
            {item.children.map((child) => {
              return (
                <Menu.Item key={child.key}>
                  <Link to={child.path}>
                    <span>{child.label}</span>
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu.SubMenu>
        )
      )}
    </Menu>
  );
}
