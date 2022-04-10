import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ConversationBox from '../components/ConversationBox';

export default {
  title: 'Example/ConversationBox',
  component: ConversationBox,
  argTypes: {
    nickName: {
      label: "Nickname",
      description: "Name to display on card",
      defaultValue: "empty",
      type: {
        name: "string"
      }
    },
    imageUrl: {
      label: "Profile Picture",
      description: "Url to profile picture",
      defaultValue: "default image",
      type: {
        name: "string"
      }
    }
  }
  } as ComponentMeta<typeof ConversationBox>;

  const Template: ComponentStory<typeof ConversationBox > = (args) => <ConversationBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  nickName: "Evan Roberts",
  imageUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  date: 1625637849
};

