// pages/dashboard/index.tsx
import React from 'react';
import { Layout, Card, Row, Col, Table } from 'antd';
import Navigation from './components/Navigation';
import { DesktopOutlined, FileOutlined, FlagOutlined, StarOutlined, TeamOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const DashboardPage: React.FC = () => {
  const stats = [
    { title: 'MOVIES', value: 103306, icon: <VideoCameraOutlined />, color: '#00bfff' },
    { title: 'SERIES', value: 8782, icon: <DesktopOutlined />, color: '#008080' },
    { title: 'ANIME', value: 0, icon: <UserOutlined />, color: '#ffa500' },
    { title: 'PORN', value: 11171, icon: <StarOutlined />, color: '#ff4500' },
    { title: 'JAV', value: 72, icon: <FlagOutlined />, color: '#696969' },
    { title: 'Categories', value: 0, icon: <FileOutlined />, color: '#1e90ff' },
    { title: 'Genres', value: 0, icon: <UploadOutlined />, color: '#d2691e' },
    { title: 'SERIES episodes', value: 1, icon: <TeamOutlined />, color: '#8b0000' },
    { title: 'ANIME episodes', value: 1, icon: <TeamOutlined />, color: '#8b0000' },
  ];

  const recentCommentsColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Video', dataIndex: 'video', key: 'video' },
    { title: 'Comments', dataIndex: 'comments', key: 'comments' },
    { title: 'Comments At', dataIndex: 'commentsAt', key: 'commentsAt' },
  ];

  const recentCommentsData = [];

  const mostPopularVideosColumns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Total View', dataIndex: 'totalView', key: 'totalView' },
  ];

  const mostPopularVideosData = [];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navigation />
      <Layout>
        <Header style={{ background: '#00bfff', padding: 0, textAlign: 'right', paddingRight: '16px' }}>
          <span style={{ color: '#fff', marginRight: '24px' }}>Visit Website</span>
          <span style={{ color: '#fff' }}>English</span>
        </Header>
        <Content style={{ margin: '16px' }}>
          <Row gutter={16}>
            {stats.map((stat) => (
              <Col span={6} key={stat.title}>
                <Card
                  bordered={false}
                  style={{ background: stat.color, color: '#fff', textAlign: 'center' }}
                >
                  <div style={{ fontSize: '24px' }}>{stat.icon}</div>
                  <div>{stat.title}</div>
                  <div style={{ fontSize: '24px' }}>{stat.value}</div>
                </Card>
              </Col>
            ))}
          </Row>
          <Card title="Recent Comments" style={{ marginTop: '16px' }}>
            <Table
              columns={recentCommentsColumns}
              dataSource={recentCommentsData}
              pagination={false}
            />
          </Card>
          <Row gutter={16} style={{ marginTop: '16px' }}>
            <Col span={12}>
              <Card title="Most Popular Videos">
                <Table
                  columns={mostPopularVideosColumns}
                  dataSource={mostPopularVideosData}
                  pagination={false}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Top Rated Videos">
                <Table
                  columns={mostPopularVideosColumns}
                  dataSource={mostPopularVideosData}
                  pagination={false}
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
