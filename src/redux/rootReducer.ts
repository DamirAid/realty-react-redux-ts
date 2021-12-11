import { combineReducers } from "redux";
import { realtyReducer } from "./realtyReducer";
import { commentsReducer } from "./commentsReducer";
export const rootReducer = combineReducers({
	realty: realtyReducer,
	comments: commentsReducer
})

export type RootState = ReturnType<typeof rootReducer>