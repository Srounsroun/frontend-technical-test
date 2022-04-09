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
    {
      "id": 1,
      "recipientId": 2,
      "recipientNickname": "Jeremie",
      "senderId": 1,
      "senderNickname": "Thibaut",
      "lastMessageTimestamp": 1625637849
    },
    {
      "id": 2,
      "recipientId": 3,
      "recipientNickname": "Patrick",
      "senderId": 1,
      "senderNickname": "Thibaut",
      "lastMessageTimestamp": 1620284667
    },
    {
      "id": 3,
      "recipientId": 1,
      "recipientNickname": "Thibaut",
      "senderId": 4,
      "senderNickname": "Elodie",
      "lastMessageTimestamp": 1625648667
    }
  ]
};
