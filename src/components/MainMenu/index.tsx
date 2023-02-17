import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuItem from 'antd/es/menu/MenuItem';

type MenuItem = {
    key: string,
    label: string,
    icon?: React.ReactNode,
    children?: MenuItem[],
};

const items: MenuItem[] = [
    {
        label: 'Page 1',
        key: '/page1',
        icon: <PieChartOutlined />,
    },
    {
        label: 'Page 2',
        key: '/page2',
        icon: <DesktopOutlined />,
    },
    {
        label: 'Page 3',
        key: 'page3',
        icon: <UserOutlined />,
        children: [
            {
                label: 'Page 301',
                key: '/page3/301',
            },
            {
                label: 'Page 302',
                key: '/page3/302',
            },
            {
                label: 'Page 303',
                key: '/page3/303',
            },
        ],
    },
    {
        label: 'Page 4',
        key: 'page4',
        icon: <TeamOutlined />,
        children: [
            {
                label: 'Page 401',
                key: '/page4/401',
            },
            {
                label: 'Page 402',
                key: '/page4/402',
            },
            {
                label: 'Page 403',
                key: '/page4/403',
            },
        ],
    },
    {
        label: 'Page 5',
        key: '/page5',
        icon: <FileOutlined />,
    },
];

const Comp: React.FC = () => {
    const navigateTo = useNavigate();
    const currentRoute = useLocation();

    const menuClick = (e: { key: string }) => {
        console.log("menuClick", e.key);

        navigateTo(e.key);
    };

    // set the openKey initial value
    let initialOpenKey: string = '';

    const findKey = (obj: { key: string }): boolean => {
        return obj.key === currentRoute.pathname;
    }

    initialOpenKey = items.filter((item: MenuItem) => item!.children ? item!.children.find(findKey) : false)
        .map((item: MenuItem) => item!.key)[0] as string
        || '';

    const [openKeys, setOpenKeys] = useState([initialOpenKey]);
    // handleOpenKeys is executed when the menu is opened or closed
    const handleOpenKeys = (keys: string[]) => {
        // keys is an array of open keys which record the path of the open menu
        // set the last key of the array to openKeys
        // only the last menu is open
        setOpenKeys([keys.pop() as string]);
    }

    return (
        <Menu theme="dark"
            // default selected key is the current route
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            onOpenChange={handleOpenKeys}
            openKeys={openKeys} />
    )
}

export default Comp