import React from 'react';
import {Button, TabPane, Tabs} from "@douyinfe/semi-ui";

const Index = () => {
  return (
    <Tabs type="line" lazyRender tabBarExtraContent={<Button>清除全部</Button>}>
      <TabPane tab="文档" itemKey="1">
        文档
      </TabPane>
      <TabPane tab="快速起步" itemKey="2">
        快速起步
      </TabPane>
      <TabPane tab="帮助" itemKey="3">
        帮助
      </TabPane>
    </Tabs>
  );
};

export default Index;
