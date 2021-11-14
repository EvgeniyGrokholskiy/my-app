import {rerender} from "../render";

let state = {

    chatPage: {
        chatsList: [
            {name: 'Darlene Black', id: '1', lastMessage: 'Hey, how is your project?',},
            {name: 'Theresa Steward', id: '2', lastMessage: 'Hi, Dmitry! I have a work for you. We',},
            {name: 'Brandon Wilson', id: '3', lastMessage: 'I am Russian and I am learning Engl',},
            {name: 'Kyle Fisher', id: '4', lastMessage: 'So, It’s up to you!',},
            {name: 'Audrey Alexander', id: '5', lastMessage: 'When you got it?',},
            {name: 'Design Conference', id: '6', lastMessage: 'Can you guys help me with it?',},
        ],

        chatMessageArray: [
            {message: "Oh, sh#t! This junior designers!!!!!!!!!!!!!!!!", type: "in", id: "1"},
            {message: "Hi, Kyle. How are you doing? Did you get that job yesterday?", type: "out", id: "2"},
            {message: "Nope, they kicked me out of the office!", type: "in", id: "3"},
            {
                message: "Wow! I can invite you in my new project. We need a product designer right now!",
                type: "out",
                id: "4"
            },
            {message: "It’ll be great! I need this job, but...", type: "in", id: "5"},
            {message: "So, it’s up to you!", type: "in", id: "6"},
        ],
    },

    profile: {
        wallMessageArray: [
            {message: "How’s your day going, guys?", likeCount: "10", id: "1"},
            {
                message: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer?",
                likeCount: "20",
                id: "2"
            }
        ],
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
}

export function addMessageOnWall(message) {

    let id = state.profile.wallMessageArray.length + 1;
    let messageObj = {
        message: message,
        likeCount: 0,
        id: id,
    };

    state.profile.wallMessageArray.push(messageObj);
    rerender(state);
}


export function sendMessage(message) {

    let id = state.chatPage.chatMessageArray.length + 1;
    let messageObj = {
        message: message,
        type: "out",
        id: id,
    };

    state.chatPage.chatMessageArray.push(messageObj);
    rerender(state);
}

export default state;