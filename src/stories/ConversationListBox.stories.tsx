import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ConversationListBox from '../components/ConversationListBox';

export default {
  title: 'Example/ConversationListBox',
  component: ConversationListBox,
  argTypes: {
    conversations: {
      type: {
        name: "object"
      }
    }
  }
} as ComponentMeta<typeof ConversationListBox>;

const Template: ComponentStory<typeof ConversationListBox> = (args) => <ConversationListBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  conversations: [
    { id: 0, recipientId: 1, recipientNickname: "006171935199", senderId: 2, senderNickname: "Joe" },
    { id: 2, recipientId: 2, recipientNickname: "Evan roberts", senderId: 2, senderNickname: "Joe" },
    { id: 3, recipientId: 3, recipientNickname: "Y liang", senderId: 2, senderNickname: "Joe" },
    { id: 4, recipientId: 4, recipientNickname: "+212-712-0777", senderId: 2, senderNickname: "Joe" }
  ]
};

