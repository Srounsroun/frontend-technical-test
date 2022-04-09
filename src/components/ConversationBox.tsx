import type { FC } from 'react'
import styles from '../styles/ConversationBox.module.css'
import Image from 'next/image'

type ConversationBoxProp = {
    recipientNickName: string
    imageUrl: string
    date: Date
}

const ConversationBox: FC<ConversationBoxProp> = ({ recipientNickName, imageUrl, date }) => {

    return (
        <div className={styles.conversation}>
            <Image className={styles.profile} width={32} height={32} src={imageUrl} alt="" unoptimized />
            {recipientNickName}
            <span>{date}</span>
        </div>
    )
}

export default ConversationBox;