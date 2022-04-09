import type { FC } from 'react'
import styles from '../styles/ConversationBox.module.css'
import defaultUserImage from '../assets/user.webp'
import Image from 'next/image'
import moment from 'moment'

type ConversationBoxProp = {
    recipientNickName: string
    imageUrl: string
    date: number
}

const ConversationBox: FC<ConversationBoxProp> = ({ recipientNickName, imageUrl, date }) => {
    return (
        <div className={styles.card}>
            <Image className={styles.profile} src={imageUrl || defaultUserImage} width={32} height={32} alt="" unoptimized />
            <div className={styles.content}>
                <span className={styles.nickName}>{recipientNickName}</span>
                <span className={styles.dateTime}>{moment.unix(date).utc().calendar()}</span>
            </div>
        </div>
    )
}

export default ConversationBox;