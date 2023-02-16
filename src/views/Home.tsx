import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import {  Outlet } from 'react-router-dom';
import MainMenu from '@/components/MainMenu';

const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* left side menu */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <MainMenu></MainMenu>
            </Sider>
            {/* rignt side content */}
            <Layout className="site-layout">
                {/* right side header */}
                <Header style={{ paddingLeft: "16px", background: colorBgContainer }} >
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/* right side content */}
                <Content style={{ margin: '16px 16px 0', height: "100%", background: colorBgContainer }}>
                    {/* window */}
                    <Outlet />
                </Content>
                {/* right side footer */}
                <Footer style={{ textAlign: 'center', lineHeight: '48px', padding: 0 }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default View;