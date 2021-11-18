const newMessageInChat = "SEND_MESSAGE_IN_CHAT";
const updateMessage = "UPDATE_MESSAGE_IN_TEXTAREA";
const setActiveChatName = "SET_ACTIVE_CHAT_NAME"

const initialState = {
    newMessage: '',
    activeChatName: '',
    chatsList: [
        {
            name: 'Darlene Black',
            id: '1',
            lastMessage: 'Hey, how is your project?',
        },
        {
            name: 'Theresa Steward',
            id: '2',
            lastMessage: 'Hi, Dmitry! I have a work for you. We',
        },
        {
            name: 'Brandon Wilson',
            id: '3',
            lastMessage: 'I am Russian and I am learning Engl',
        },
        {
            name: 'Kyle Fisher',
            id: '4',
            lastMessage: 'So, It’s up to you!',
        },
        {
            name: 'Audrey Alexander',
            id: '5',
            lastMessage: 'When you got it?',
        },
        {
            name: 'Design Conference',
            id: '6',
            lastMessage: 'Can you guys help me with it?',
        },
    ],

    chatMessageArray: [
        {
            message: "Oh, sh#t! This junior designers!!!!!!!!!!!!!!!!",
            type: "in",
            id: "1"
        },
        {
            message: "Hi, Kyle. How are you doing? Did you get that job yesterday?",
            type: "out",
            id: "2"
        },
        {
            message: "Nope, they kicked me out of the office!",
            type: "in",
            id: "3"
        },
        {
            message: "Wow! I can invite you in my new project. We need a product designer right now!",
            type: "out",
            id: "4"
        },
        {
            message: "It’ll be great! I need this job, but...",
            type: "in",
            id: "5"
        },
        {
            message: "So, it’s up to you!",
            type: "in",
            id: "6"
        },
    ],
};

export const chatReducer = (state = initialState, action) => {

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