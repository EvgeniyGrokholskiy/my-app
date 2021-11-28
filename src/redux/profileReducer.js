const AddMessageOnWall = "ADD_MESSAGE_ON_WALL";
const ChangeNewMessageOnWall = "CHANGE_NEW_MESSAGE_ON_WALL";
const SetUserProfile = "SET_USERS_PROFILE"

const initialState = {
    newMessage: "",
    wallMessageArray: [
        {
            message: "How’s your day going, guys?",
            likeCount: 10,
            id: 1
        },
        {
            message: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer?",
            likeCount: 20,
            id: 2
        }

    ],

    profile: {
        aboutMe: null,
        contacts: {
            facebook: "facebook.com",
            github: "github.com",
            instagram: "instagra.com/sds",
            mainLink: null,
            twitter: "https://twitter.com/@sdf",
            vk: "vk.com/dimych",
            website: null,
            youtube: null,
        },
        fullName: "samurai dimych",
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        photos: {small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0', large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'},
        userId: 2

    },
};

export const profileReducer = (state = initialState, action) => {

    const isEmptyMessage = (message) => (message === '' || message === undefined);

    switch (action.type) {

        case ChangeNewMessageOnWall: {

            return {
                ...state,
                newMessage: action.message
            };

        }

        case AddMessageOnWall: {

            if (isEmptyMessage(state.newMessage)) return state;

            let id = state.wallMessageArray.length + 1;
            let messageObj = {
                message: state.newMessage,
                likeCount: 0,
                id: id,
            };

            return {
                ...state,
                wallMessageArray: [...state.wallMessageArray, messageObj],
                newMessage: ''
            };
        }

        case SetUserProfile: {
            return {
                ...state,
                profile: action.profile
            }
        }


        default:
            return state;

    }
};

export const addPost = () => {
    return {
        type: AddMessageOnWall,
    };
}

export const changeNewMessageOnWall = (message) => {
    return {
        type: ChangeNewMessageOnWall,
        message: message,
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SetUserProfile,
        profile: profile
    }
}