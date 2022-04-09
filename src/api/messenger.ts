import { Message } from "../types/message";

export const api = {
    get baseUrl() {
      return 'http://127.0.0.1:3005/';
    },

    getMessages(conversationId: number) : Promise<Message[]> {
      return fetch(`${this.baseUrl}messages/${conversationId}`)
        .then(resp => resp.json())
        .catch(reason => console.error("error fetching messages", reason));
    }
}

