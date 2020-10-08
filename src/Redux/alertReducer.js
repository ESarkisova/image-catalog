import {SHOW_MESSAGE, HIDE_MESSAGE} from "./actionTypes";

const initialState = {
    message: '',
    typeAlert: '',
    isVisible: false
};
const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MESSAGE:
            return {
                ...state,
                message: action.message,
                typeAlert: action.typeAlert,
                isVisible: true
            };
        case HIDE_MESSAGE:
            return {
                ...state,
                isVisible: false
            };
        default:
            return state;
    }
};

export const showMsg = (message, typeAlert = 'info') => ({
    type: SHOW_MESSAGE,
    message,
    typeAlert
});
export const hideMsg = () => ({type: HIDE_MESSAGE});

export default alertReducer;