import { FC, useEffect, useState } from 'react';
import { api } from '../api/messenger';
import { Message } from '../types/message';
import MessageList from './MessageList';

const Messenger: FC = () => {

    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        api.getMessages(1)
            .then(messages => setMessages(messages));
    }, [])

    return (
        <MessageList messages={messages} recipient="" />
    )
}

export default Messenger;