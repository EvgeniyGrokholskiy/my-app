const newMessageInChat = "SEND_MESSAGE_IN_CHAT";
const updateMessage = "UPDATE_MESSAGE_IN_TEXTAREA";
const setActiveChatName = "SET_ACTIVE_CHAT_NAME"

const initialState = {
    newMessage: "",
    activeChatName: "",
    chatsList: [
        {
            name: 'Darlene Black',
            id: 1,
            lastMessage: 'Hey, how is your project?',
        },
        {
            name: 'Theresa Steward',
            id: 2,
            lastMessage: 'Hi, Dmitry! I have a work for you. We',
        },
        {
            name: 'Brandon Wilson',
            id: 3,
            lastMessage: 'I am Russian and I am learning Engl',
        },
        {
            name: 'Kyle Fisher',
            id: 4,
            lastMessage: 'So, It’s up to you!',
        },
        {
            name: 'Audrey Alexander',
            id: 5,
            lastMessage: 'When you got it?',
        },
        {
            name: 'Design Conference',
            id: 6,
            lastMessage: 'Can you guys help me with it?',
        },
    ],

    chatMessageArray: [
        {
            message: "Oh, sh#t! This junior designers!!!!!!!!!!!!!!!!",
            type: "in",
            id: 1,
            data: "01.01.01",
        },
        {
            message: "Hi, Kyle. How are you doing? Did you get that job yesterday?",
            type: "out",
            id: 2,
            data: "02.02.02"
        },
        {
            message: "Nope, they kicked me out of the office!",
            type: "in",
            id: 3,
            data: "03.03.03"
        },
        {
            message: "Wow! I can invite you in my new project. We need a product designer right now!",
            type: "out",
            id: 4,
            data: "04.04.04"
        },
        {
            message: "It’ll be great! I need this job, but...",
            type: "in",
            id: 5,
            data: "05.05.05"
        },
        {
            message: "So, it’s up to you!",
            type: "in",
            id: 6,
            data: "06.06.06"
        },
    ],
};

export const chatReducer = (state = initialState, action) => {

    const isEmptyMessage = (message) => (message === '' || message === undefined);

    switch (action.type) {

        case updateMessage: {

            let stateCopy = {...state};

            stateCopy.newMessage = action.message;
            return stateCopy;
        }

        case newMessageInChat: {

            let stateCopy = {...state};
            stateCopy.chatMessageArray = [...state.chatMessageArray];

            if (isEmptyMessage(action.message)) return state;

            let id = state.chatMessageArray.length + 1;
            const day = new Date().getDate();
            const month = new Date().getMonth();
            const year = new Date().getUTCFullYear();
            const hour = new Date().getHours();
            const minute = new Date().getMinutes();
            let messageObj = {
                data: `${day}.${month}.${year} ${hour}:${minute}`,
                message: `${action.message}`,
                type: "out",
                id: id,
            };

            stateCopy.chatMessageArray.push(messageObj);
            stateCopy.newMessage = '';

            return stateCopy;
        }
        case setActiveChatName: {

            let stateCopy = {...state};
            stateCopy.chatsList = [...state.chatsList];

            stateCopy.chatsList.forEach((chat) => {
                if (chat.id === action.activeChatId) {
                    stateCopy.activeChatName = chat.name;
                }
            });

            return stateCopy;
        }


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