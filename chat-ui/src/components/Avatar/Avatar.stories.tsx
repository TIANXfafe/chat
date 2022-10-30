import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Avatar} from './index';
import face1 from '../../assets/images/face-male-1.jpg'

export default {
  title: 'UI组件/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: face1,
};