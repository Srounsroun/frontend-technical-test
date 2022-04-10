import moment from "moment";
import { Conversation } from "../types/conversation";
import { Message } from "../types/message";

export const api = {
    get baseUrl() {
      return 'http://127.0.0.1:3005/';
    },

    postMessage(authorId:number, conversationId: number, body: string) : Promise<Message> {
        let message : Message = {
            id: null,
            body:body,
            conversationId: conversationId,
            authorId: authorId,
            timestamp: moment().unix(),
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(message)
        };

        return fetch(`${this.baseUrl}messages/${conversationId}`, requestOptions)
          .then(resp => resp.json())
          .catch(reason => console.error("error posting messages", reason));
      },
      
    getMessages(conversationId: number) : Promise<Message[]> {
      return fetch(`${this.baseUrl}messages/${conversationId}`)
        .then(resp => resp.json())
        .catch(reason => console.error("error fetching messages", reason));
    },
    
    getConversations(userId) : Promise<Conversation[]> {
        return fetch(`${this.baseUrl}conversations/${userId}`)
          .then(resp => resp.json())
          .catch(reason => console.error("error fetching conversations", reason));
      }
}

