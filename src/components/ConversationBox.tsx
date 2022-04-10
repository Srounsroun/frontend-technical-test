import type { FC } from 'react'
import styles from '../styles/ConversationBox.module.css'
import defaultUserImage from '../assets/user.webp'
import Image from 'next/image'
import moment from 'moment'
import { Conversation } from '../types/conversation'

type ConversationBoxProp = {
    nickName: string
    imageUrl: string
    date: number
    onClick?: () => void
}

const ConversationBox: FC<ConversationBoxProp> = ({ nickName, imageUrl, date, onClick}) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <Image className={styles.profile} src={imageUrl || defaultUserImage} layout="fixed" width={40} height={40} alt="" unoptimized />
            <div className={styles.content}>
                <span className={styles.nickName}>{nickName}</span>
                <span className={styles.dateTime}>{moment.unix(date).utc().calendar()}</span>
            </div>
        </div>
    )
}

export default ConversationBox;