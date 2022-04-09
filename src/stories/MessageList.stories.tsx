import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MessageList from '../components/MessageList';

export default {
  title: 'Example/Message',
  component: MessageList,
  argTypes: {
    messages: {
      type: {
        name: "object"
      }
    }
  }
} as ComponentMeta<typeof MessageList>;

const Template: ComponentStory<typeof MessageList> = (args) => <MessageList {...args} />;

export const Default = Template.bind({});
Default.args = {
  recipient: "Jane Do",
  messages: [
    {
      "id": 1,
      "conversationId": 1,
      "timestamp": 1625637849,
      "authorId": 1,
      "body": "Bonjour c'est le premier message de la première conversation"
    },
    {
      "id": 2,
      "conversationId": 1,
      "timestamp": 1625637867,
      "authorId": 1,
      "body": "Bonjour c'est le second message de la première conversation"
    },
    {
      "id": 3,
      "conversationId": 1,
      "timestamp": 1625648667,
      "authorId": 2,
      "body": "Bonjour c'est le troisième message de la première conversation"
    }
  ]
};

