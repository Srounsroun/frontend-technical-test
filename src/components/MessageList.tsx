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
                <span className={styles.lastDateMessage}>{moment.unix(getLastMessage()?.timestamp).calendar()}</span>
            </div>
            <div className={styles.content}>
                {messages?.map(message => (
                    <div key={`msg_${message.id}`} className={styles.box}>
                        <div className={isRecipient(message) ? styles.left : styles.right} >
                            <span className={styles.recipient}>{recipient}</span>
                            <div className={styles.content}>
                                <span>{message.body}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            < div className={styles.footer} >
                <input type="text" />
            </div>
        </div >
    )
}

export default MessageList;