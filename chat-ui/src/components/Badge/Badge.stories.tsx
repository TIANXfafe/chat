import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Badge} from './index';
import {Avatar} from '../Avatar/index';

import face1 from '../../assets/images/face-male-1.jpg'

export default {
  title: 'UI组件/Badge',
  component: Badge
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  show: true,
  count: 5,
  showZero: true,
  variants: true,
  children: <Avatar src={face1} />
};