import React from 'react';
import { Space, Card, Input } from 'antd';
// import { NavLink } from 'react-router-dom';
import './right.styl';

const { Search } = Input;

const NavComponent: React.FC = () => {
  const onSearch = (keyword: string) => {
    console.log(keyword);
  };

  return (
    <div className="lj-right-aside">
      <Space direction="vertical">
        <div className="lj-right-aside-search">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
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
