import type { FC } from 'react'
import styles from '../styles/ConversationBox.module.css'
import defaultUserImage from '../assets/user.webp'
import Image from 'next/image'
import moment from 'moment'

type ConversationBoxProp = {
    nickName: string
    imageUrl: string
    date: number
}

const ConversationBox: FC<ConversationBoxProp> = ({ nickName, imageUrl, date }) => {
    return (
        <div className={styles.card}>
            <Image className={styles.profile} src={imageUrl || defaultUserImage} layout="fixed" width={40} height={40} alt="" unoptimized />
            <div className={styles.content}>
                <span className={styles.nickName}>{nickName}</span>
                <span className={styles.dateTime}>{moment.unix(date).utc().calendar()}</span>
            </div>
        </div>
    )
}

export default ConversationBox;