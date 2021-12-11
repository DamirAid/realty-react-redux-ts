export interface CommentsState {
	comments: IComment[],
	addedComment: {} | IComment
}

export enum CommentsActionTypes {
	GET_COMMENTS = 'GET_COMMENTS',
	ADD_COMMENT = 'ADD_COMMENT'
}
interface GetComments {
	type: CommentsActionTypes.GET_COMMENTS
	payload: any[]
}

interface AddComment {
	type: CommentsActionTypes.ADD_COMMENT,
	payload: IComment
}
export interface IComment {
	uid: string | number,
	displayName: string,
	photoURL: string,
	text: string,
	createdAt: string
}

export type CommentsAction = GetComments | AddComment
