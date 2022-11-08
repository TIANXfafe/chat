import React from 'react';
import {Layout} from '@douyinfe/semi-ui';
import {IconSemiLogo} from '@douyinfe/semi-icons';

const {Footer} = Layout;

const Index = () => {
  return (
      <Footer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            color: 'var(--semi-color-text-2)',
            backgroundColor: 'rgba(var(--semi-grey-0), 1)'
          }}
      >
			<span
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
      >
				<IconSemiLogo size="large" style={{ marginRight: '8px' }} />
				<span>Copyright ©2021 tianxu. All Rights Reserved. </span>
			</span>
        <span>
				<span style={{ marginRight: '24px' }}>Github地址</span>
				<span>反馈建议</span>
			</span>
      </Footer>
  );
};

export default Index;
