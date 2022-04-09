import moment from 'moment'
import type { FC } from 'react'
import styles from '../styles/Messages.module.css'
import { Message } from '../types/message'
import { getLoggedUserId } from '../utils/getLoggedUserId'

type MessageListProps = {
    recipient: ""
    messages: Message[]
}

const MessageList: FC<MessageListProps> = ({ messages, recipient }) => {

    const userId = getLoggedUserId();

    const isRecipient = (message: Message): boolean => message.authorId != userId;

    const getLastMessage = (): Message => messages?.at(-1);

    return (
        <div className={styles.list}>
            <div className={styles.header}>
                <span>{recipient}</span>
                <span>{moment.unix(getLastMessage()?.timestamp).calendar()}</span>
            </div>
            {messages?.map(message => <div className={isRecipient(message) ? styles.boxLeft : styles.boxRight } key={`msg_${message.id}`}>
                {isRecipient(message) && <span>{recipient}</span>}
                <span>{message.body}</span>
                <span>{moment.unix(message.timestamp).calendar()}</span>
            </div>)}
            <div className={styles.footer}>
                <input type="text" />
            </div>
        </div>
    )
}

export default MessageList;