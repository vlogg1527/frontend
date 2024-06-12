import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  StarOutlined,
  FlagOutlined,
  FileOutlined,
  TeamOutlined,
  DashboardOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react'; // Import signOut from next-auth/react

const { Sider } = Layout;

const Navigation: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear the authentication token
    // Use signOut from next-auth to sign the user out
    signOut({ callbackUrl: '/auth/login' });
  };

  return (
    <Sider width={200} style={{ background: '#001529' }}>
      <div className="logo">
        <img src="/logo.png" alt="Logo" style={{ height: '32px', margin: '16px' }} />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link href="/dashboard">
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link href="/movies">
            <span>Movies</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
          <Link href="/series">
            <span>Series</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<VideoCameraOutlined />}>
          <Link href="/anime">
            <span>ANIME</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<StarOutlined />}>
          <Link href="/porn">
            <span>PORN</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<FlagOutlined />}>
          <Link href="/countries">
            <span>Countries</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<FileOutlined />}>
          <Link href="/categories">
            <span>Categories</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<UploadOutlined />}>
          <Link href="/genres">
            <span>Genres</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="9" icon={<TeamOutlined />}>
          <Link href="/tags">
            <span>Tags</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="10" icon={<LogoutOutlined />} onClick={handleLogout}>
          <span>Logout</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navigation;
