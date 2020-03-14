import {CHANGE_TAG} from "./actionTypes";

const initialState = {
    tag: ''
};
const buttonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TAG:
            return {
                ...state,
                tag: action.tag
            };
        default:
            return state;
    }
};

export const changeTag = (tag) => ({
    type: CHANGE_TAG,
    tag
});

export default buttonsReducer;