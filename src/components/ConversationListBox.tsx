import type { FC } from 'react'
import styles from '../styles/ConversationListBox.module.css'
import { Conversation } from '../types/conversation'
import ConversationBox from './ConversationBox'

type ConversationListBoxProp = {
    conversations: Conversation[]
    onCardClick: (conversation: Conversation) => void
}

const ConversationListBox: FC<ConversationListBoxProp> = ({ conversations, onCardClick }) => {
    return (
        <div className={styles.conversations}>
            {conversations?.map(conversation => <ConversationBox
                key={`conv_${conversation.id}`}
                nickName={conversation.recipientNickname}
                date={conversation.lastMessageTimestamp}
                imageUrl={null}
                onClick={() => { onCardClick(conversation); }}
            />)
            }
        </div>
    )
}

export default ConversationListBox;