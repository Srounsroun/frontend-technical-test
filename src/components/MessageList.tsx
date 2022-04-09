import moment from 'moment'
import Image from 'next/image'
import type { FC } from 'react'
import styles from '../styles/Messages.module.css'
import { Message } from '../types/message'
import { getLoggedUserId } from '../utils/getLoggedUserId'
import buttonSend from '../assets/send.webp'

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
            <div className={styles.content} >
                {messages?.map(message => (
                    <div key={`msg_${message.id}`} className={styles.box}>
                        <div className={isRecipient(message) ? styles.left : styles.right} >
                            <div className={styles.recipient}>{recipient}</div>
                            <div className={styles.body}>
                                <span>{message.body}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            < div className={styles.footer} >
                <form onSubmit={(e) => { e.preventDefault(); console.log("submit") }}>
                    <input type="text" />
                </form>
            </div>
        </div >
    )
}

export default MessageList;