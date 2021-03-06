import { sendMessage } from "./chats/actions"
import { SEND_MESSAGE } from "./chats/actionTypes"

export const middleware = store => next => action =>{
    if (
        action.type === SEND_MESSAGE &&
        action.payload.message.author !== "Bot"
        ) {
        setTimeout(() => {
            store.dispatch(sendMessage(action.payload.chatId, { 
                text: 'I am robot',
                author: "Bot", 
                })
            );
        }, 1000);
    }
    return next(action);
}
