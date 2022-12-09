import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu} from 'antd';

const { Header } = Layout;

const menuList = [{title: 'Home', link:'/'}, {title: 'Home', link:'/'}]

const items1= menuList.map((item:any, index: number) => ({
  id: `${index}`,
  label: `${item.title}`,
}));

const HeaderPage: React.FC = () => {

  return (
    <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
  );
};

export default HeaderPage;