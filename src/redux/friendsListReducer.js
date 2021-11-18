const initialState = {
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
};

export const friendsListReducer = (state = initialState, action) => {
    return state;
}