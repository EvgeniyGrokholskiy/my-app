const newMessageInChat = "SEND_MESSAGE_IN_CHAT";
const updateMessage = "UPDATE_MESSAGE_IN_TEXTAREA";
const setActiveChatName = "SET_ACTIVE_CHAT_NAME"

export const chatReducer = (action, state) => {

    const isEmptyMessage = (message) => (message === '' || message === undefined);

    switch (action.type) {

        case updateMessage:
            state.newMessage = action.message;
            return state;

        case newMessageInChat:

            if (isEmptyMessage(action.message)) return state;

            let id = state.chatMessageArray.length + 1;
            let messageObj = {
                message: action.message,
                type: "out",
                id: id,
            };

            state.chatMessageArray.push(messageObj);
            state.newMessage = ''
            return state;

        case setActiveChatName:

            state.chatsList.forEach((chat) => {
                if (chat.id === action.activeChatId) {
                    state.activeChatName = chat.name;
                }
            });
            return state;


        default:
            return state;
    }
};

export const sendMessageActionCreator = (newMessage) => {
    return {
        type: newMessageInChat,
        message: newMessage,
    }
}

export const updateMessageInTextareaActionCreator = (newMessage) => {
    return {
        type: updateMessage,
        message: newMessage,
    }
}

export const setActiveChatNameActionCreator = (chatId) => {
    return {
        type: setActiveChatName,
        activeChatId: chatId,
    }
}