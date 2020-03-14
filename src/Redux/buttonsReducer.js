import {CHANGE_IS_LOADING, CLEAR_IMAGE, SET_IMAGE, CHANGE_IS_GROUP} from "./actionTypes";
import {getImageApi} from "../DAL/api";

const initialState = {
    isLoading: false,
    isGroup: false,
    images: []
};
const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGE:
            return {
                ...state,
                isLoading: false,
                images: [action.image, ...state.images]
            };
        case CLEAR_IMAGE:
            return {
                ...state,
                images: []
            };
        case CHANGE_IS_GROUP:
            return {
                ...state,
                isGroup: action.isGroup
            };
        case CHANGE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        default:
            return state;
    }
};

export const setImage = (image) => ({
    type: SET_IMAGE,
    image
});

export const clearImage = () => ({ type: CLEAR_IMAGE});

export const changeIsGroup = (isGroup) => ({
    type: CHANGE_IS_GROUP,
    isGroup
});

export const changeIsLoading = (isLoading) => ({
    type: CHANGE_IS_LOADING,
    isLoading
});

export const getImage = (tag) => {
    return (dispatch) => {
        dispatch(changeIsLoading(true));
        return getImageApi(tag)
            .then((response) => response.data)
            .then((data) => {
                if (data.length) {
                    let newImage = {img: data.embed_url, tag};
                    dispatch(setImage(newImage));
                }
            })
            .catch( (error) => {console.log(error);})
            .finally(() => {
                dispatch(changeIsLoading(true));
            })
    };
};
export default imageReducer;