import {applyMiddleware, combineReducers, createStore} from 'redux'
import TourReducer from "./reducers/TourReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    tour: TourReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));