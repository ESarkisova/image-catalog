import {applyMiddleware, combineReducers, createStore} from "redux";
import imageReducer from "./imageReducer";
import thunk from "redux-thunk";
import buttonsReducer from "./buttonsReducer";
import alertReducer from "./alertReducer";


const reducers = combineReducers({
    image: imageReducer,
    buttons: buttonsReducer,
    alert: alertReducer
});

const store = createStore(reducers, applyMiddleware(thunk));


export default store;