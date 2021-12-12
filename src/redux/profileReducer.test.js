import {profileReducer, addPost} from "./profileReducer";

const initialState = {
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

    profile: null,
    profileStatus: "",
    putRequestStatus: null
};


describe('should be added post on wall',()=> {

    it ('function must be defined', ()=>{
        expect(profileReducer).toBeDefined()
    })

    it ('message must be added in array',()=> {
        let newState = profileReducer(initialState,addPost('test message'))
        expect(newState.wallMessageArray.length).toBe(3)
    })

    it('text in new message must be "test message"', function () {
        let newState = profileReducer(initialState,addPost('test message'))
        expect(newState.wallMessageArray[2].message).toBe("test message")
    });
})