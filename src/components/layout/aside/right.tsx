import React from 'react';
import { Space, Card } from 'antd';
// import { NavLink } from 'react-router-dom';
import './right.styl';

const NavComponent: React.FC = () => {
  return (
    <div className="lj-right-aside">
      <Space direction="vertical">
        <Card title="Card" style={{ width: 260 }}>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card" style={{ width: 260 }}>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    </div>
  );
};

export default NavComponent;
