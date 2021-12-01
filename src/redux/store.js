import {profileReducer} from "./profileReducer";
import {chatReducer} from "./chatReducer";
import {newsReducer} from "./newsReducer";
import {musicReducer} from "./musicReducer";
import {settingsReducer} from "./settingsReducer";
import {friendsListReducer} from "./friendsListReducer";

let store = {

    _state: {
        chatPage: {
            newMessage: "",
            activeChatName: "",
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
        },

        profile: {
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
                photos: {
                    small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0',
                    large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'
                },
                userId: 2
            },

            profileStatus: "test",
        },

        friendsList: {
            friends: [
                {
                    name: "Darlene Black",
                    job: "HR-manager, 10 000 connec...",
                    id: "1",
                },
                {
                    name: "Theresa Steward",
                    job: "iOS developer",
                    id: "2",
                },
                {
                    name: "Brandon Wilson",
                    job: "Senior UX designer",
                    id: "3",
                },
                {
                    name: "Kyle Fisher",
                    job: "Product designer at Com...",
                    id: "4",
                },
                {
                    name: "Audrey Alexander",
                    job: "Team lead at Google",
                    id: "5",
                }
            ],
        },

        findUsersPage: {
            findUsers: [
                /*{
                    id: 1,
                    photoURL: "",
                    followed: false,
                    fullName: "Dmitry",
                    status: "Hi",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 2,
                    photoURL: "",
                    followed: false,
                    fullName: "Dmitry2",
                    status: "Hi2",
                    location: {city: "Minsk2", country: "Belarus"}
                },
                {
                    id: 3,
                    photoURL: "",
                    followed: false,
                    fullName: "Dmitry3",
                    status: "Hi3",
                    location: {city: "Minsk3", country: "Belarus"}
                },
                {
                    id: 4,
                    photoURL: "",
                    followed: false,
                    fullName: "Dmitry4",
                    status: "Hi4",
                    location: {city: "Minsk4", country: "Belarus"}
                },
                {
                    id: 5,
                    photoURL: "",
                    followed: false,
                    fullName: "Dmitry5",
                    status: "Hi5",
                    location: {city: "Minsk5", country: "Belarus"}
                },*/
            ],
            currentPage: 1,
            totalUsers: 100,
            usersOnPage: 5,
            isFetching: true,
            isFollowingInProgress: false,
        },

        auth: {
            id: null,
            login: null,
            email: null,
            isAuth: false,
            isFetching: false
        },

        musicPage: {},

        newsPage: {},

        settings: {},
    },

    _rerender() {

    },

    subscriber(observer) {
        this._rerender = observer;
    },

    getState() {
        return this._state;
    },

    setState(path, value) {
        return this[path] = value
    },

    dispatch(action) {

        this._state.profile = profileReducer(action, this._state.profile);
        this._state.chatPage = chatReducer(action, this._state.chatPage);
        this._state.friendsList = friendsListReducer(action, this._state.friendsList);
        this._state.newsPage = newsReducer(action, this._state.newsPage);
        this._state.musicPage = musicReducer(action, this._state.musicPage);
        this._state.settings = settingsReducer(action, this._state.settings);
        this._rerender(this._state);

    }

}

export default store;