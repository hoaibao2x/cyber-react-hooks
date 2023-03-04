import { ADD_COMMENT } from "../type/fakeBookType";

const initialState = {
    mangComment: [
        {
            username: 'user01',
            avatar: "https://i.pravatar.cc/?u=66",
            comment: "comment 01"
        },
        { 
            username: 'user02',
            avatar: "https://i.pravatar.cc/?u=67",
            comment: "comment 02"
        }
    ]
}

export const fakeBookReducer = (state = initialState, action) => {
    switch (action.type) {

        // Các type cần chuyển thành biến để dễ quản lý (tránh hardcode)
        case ADD_COMMENT:
            // console.log(action);
            state.mangComment = [...state.mangComment, action.userInfo];
            
            return { ...state }

        default:
            return state
    }
}
