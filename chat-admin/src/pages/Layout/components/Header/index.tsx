import React from 'react';
import {Layout, Nav} from '@douyinfe/semi-ui';
import HeaderRight from "../HeaderRight";

const {Header} = Layout;

const Index = () => {
  return (
    <Header>
      <Nav
        mode="horizontal"
        header={<div>123</div>}
        footer={<HeaderRight />}
      />
    </Header>
  );
};

export default Index;
