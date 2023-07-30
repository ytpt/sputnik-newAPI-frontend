import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import spotsReducer from "./spotsReducer";
import categoriesReducer from "./categoriesReducer";


const rootReducer = combineReducers({
    spotsReducer: spotsReducer,
    categoriesReducer: categoriesReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, composeWithDevTools());