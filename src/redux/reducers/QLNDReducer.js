import { USERLOGIN } from "../../util/setting";

// Chứa userLogin từ localStorage
let uLogin = null;

if (localStorage.getItem(USERLOGIN)) {
    // Có localStorage
    uLogin = JSON.parse(localStorage.getItem(USERLOGIN));
}

const initialState = {
    uLogin: uLogin
}

export const QLNDReducer = (state = initialState, action) => {
    switch (action.type) {

        case "LOGIN":
            console.log('login of state', state.uLogin);
            state.uLogin = action.uLogin;
            
            return { ...state }

        default:
            return state
    }
}
