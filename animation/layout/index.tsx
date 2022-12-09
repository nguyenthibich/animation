import React from 'react';
import { Layout, theme } from 'antd';
import HeaderPage from './header';
import FooterPage from './footer';
import BreadcrumbCustom from '../components/breadcrumb';
import Sidebar from './sidebar';

const { Content } = Layout;

type LayoutDefaultProps = {
    children: React.ReactNode
}



const LayoutDefault = ({children}:LayoutDefaultProps) => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    
  return (
    <Layout>
      <HeaderPage />
      <Content style={{ padding: '0 50px' }}>
        <BreadcrumbCustom />
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sidebar />
          <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>
        </Layout>
      </Content>
      <FooterPage />
    </Layout>
  );
};

export default LayoutDefault;