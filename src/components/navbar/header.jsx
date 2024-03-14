import { HomeTwoTone, EditTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
    const [current, setCurrent] = useState('h');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <div className="navbar">
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="h" icon={<HomeTwoTone />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="r" icon={<EditTwoTone />}>
                    <Link to="/Register">Register</Link>
                </Menu.Item>
                <Menu.Item key="l" icon={<CheckCircleTwoTone />}>
                    <Link to="/login">Login</Link>
                </Menu.Item>
            </Menu>
            <Outlet />
        </div>
    )
};

export default Header;
