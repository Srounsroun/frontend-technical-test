import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Messenger from '../components/Messenger';

export default {
  title: 'Example/Messenger',
  component: Messenger,
} as ComponentMeta<typeof Messenger>;

const Template: ComponentStory<typeof Messenger> = (args) => <Messenger {...args} />;

export const App = Template.bind({});
App.args = {
};

