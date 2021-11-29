import { combineReducers } from "redux";
import { realtyReducer } from "./realtyReducer";
export const rootReducer = combineReducers({
	realty: realtyReducer
})

export type RootState = ReturnType<typeof rootReducer>