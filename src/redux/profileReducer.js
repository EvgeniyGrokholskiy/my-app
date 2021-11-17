const addMessageOnWall = "ADD_MESSAGE_ON_WALL";
const changeNewMessageOnWall = "CHANGE_NEW_MESSAGE_ON_WALL";

export const profileReducer = (action, state) => {

    const isEmptyMessage = (message) => (message === '' || message === undefined);

    switch (action.type) {

        case changeNewMessageOnWall:
            state.newMessage = action.message;
            return state;

        case addMessageOnWall:

            if (isEmptyMessage(action.message)) return state;

            let id = state.wallMessageArray.length + 1;
            let messageObj = {
                message: action.message,
                likeCount: 0,
                id: id,
            };

            state.wallMessageArray.push(messageObj);
            state.newMessage = '';
            return state;

        default:
            return state;
    }
};

export const addMessageOnWallActionCreator = (message) => {
    return {
        type: addMessageOnWall,
        message: message,
    };
}

export const changeNewMessageOnWallActionCreator = (message) => {
    return {
        type: changeNewMessageOnWall,
        message: message,
    }
}