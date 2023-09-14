import {applyMiddleware, createStore} from 'redux'
import TourReducer from "./reducers/TourReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
    TourReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;