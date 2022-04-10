import moment from 'moment'
import { FC, FormEvent, useState } from 'react'
import styles from '../styles/Messages.module.css'
import { Message } from '../types/message'
import { getLoggedUserId } from '../utils/getLoggedUserId'

type MessageListProps = {
    recipient: string
    messages: Message[]
    onSubmit?: (message: string) => void
    onGoBack?: () => void
}

const MessageList: FC<MessageListProps> = ({ messages, recipient, onSubmit, onGoBack }) => {

    const userId = getLoggedUserId();

    const isRecipient = (message: Message): boolean => message.authorId != userId;

    const getLastMessageDate = (): string => {
        if (messages.length === 0) {
            return null;
        }
        let lastMessage = messages?.at(-1);
        return moment.unix(lastMessage?.timestamp).calendar();
    }

    const [message, setMessage] = useState("");

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (onSubmit)
            onSubmit(message);
        setMessage(null);
    }

    return (
        <div className={styles.list}>
            <div className={styles.header}>
                <span onClick={onGoBack}><b>Back</b></span>
                <span>{recipient}</span>
                <span className={styles.lastDateMessage}>{getLastMessageDate()}</span>
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
                <form onSubmit={handleOnSubmit}>
                    <input type="text" value={message || ""} onChange={
                        (e) => {
                            setMessage(e.target.value);
                        }}
                    />
                </form>
            </div>
        </div >
    )
}

export default MessageList;