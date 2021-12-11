import { CommentsActionTypes, CommentsAction } from '../types/comments';
import { CommentsState } from '../types/comments';


const INIT_STATE: CommentsState = {
	comments: [],
	addedComment: {}
}

export const commentsReducer = (state = INIT_STATE, action: CommentsAction): CommentsState => {
	switch (action.type) {
		case CommentsActionTypes.GET_COMMENTS:
			return { ...state, comments: action.payload }
			case CommentsActionTypes.ADD_COMMENT:
				return { ...state, addedComment: action.payload }
		default: return state
	}
}