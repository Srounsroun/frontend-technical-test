import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ConversationBox from '../components/ConversationBox';

export default {
  title: 'Example/ConversationBox',
  component: ConversationBox,
  argTypes: {
    recipientNickName: {
      label: "recipient nickname",
      type: {
        name: "string"
      }
    },
    imageUrl: {
      label: "profile picture",
      type: {
        name: "string"
      }
    }
  }
  } as ComponentMeta<typeof ConversationBox>;

  const Template: ComponentStory<typeof ConversationBox > = (args) => <ConversationBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  recipientNickName: "Evan Roberts",
  imageUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  date: Date.now()
};

