import { FC, useEffect, useState } from 'react';
import { api } from '../api/messenger';
import { Conversation } from '../types/conversation';
import { Message } from '../types/message';
import { getLoggedUserId } from '../utils/getLoggedUserId';
import ConversationListBox from './ConversationListBox';
import MessageList from './MessageList';

const Messenger: FC = () => {

    const userId = getLoggedUserId();

    const [recipient, setRecipient] = useState<string>("");
    const [messages, setMessages] = useState<Message[]>();
    const [currentConversation, setCurrentConversation] = useState<Conversation>();

    const [conversations, setConversations] = useState<Conversation[]>();

    useEffect(() => {
        api.getConversations(userId)
            .then(conversations => setConversations(conversations));
    }, [])

    const handleOnClick = (conversation: Conversation) => {
        api.getMessages(conversation.id)
        .then(messages => { 
            setRecipient(conversation.recipientNickname);
            setMessages(messages);
            setCurrentConversation(conversation);
        });
    }

    const handleOnSubmit = (message) => {
        api.postMessage(userId, currentConversation.id, message)
        .then(response => { 
            setMessages([ ...messages, response])
        });
    }

    return (
        <>
            {<ConversationListBox conversations={conversations} onCardClick={handleOnClick} />}
            {currentConversation && <MessageList messages={messages} recipient={recipient} onSubmit={handleOnSubmit} />}
        </>
    )
}

export default Messenger;