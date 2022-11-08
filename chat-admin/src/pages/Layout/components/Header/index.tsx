import React from 'react';
import {Layout, Nav} from '@douyinfe/semi-ui';

const {Header} = Layout;

const Index = () => {
  return (
    <Header>
      <Nav
        mode="horizontal"
        header={<div>123</div>}
        footer={<div>456</div>}
      />
    </Header>
  );
};

export default Index;
