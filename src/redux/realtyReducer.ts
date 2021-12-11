import { RealtyAction, RealtyActionTypes } from './../types/realty';
import { getCountRealtiesInFavorite } from '../helpers/favoriteFunctions';
import { RealtyState } from '../types/realty';




const INIT_STATE: RealtyState = {
	realty: [],
	houses: [],
	apartments: [],
	realtyCount: 0,
	realtyLimit: 3,
	realtyPage: 1,
	favoriteLength: getCountRealtiesInFavorite(),
	details: {},
	favorite: {},
	searchRealty: [],
	addedRealty: {}


}

export const realtyReducer = (state = INIT_STATE, action: RealtyAction): RealtyState => {
	switch (action.type) {
		case RealtyActionTypes.GET_HOUSES:
			return { ...state, houses: action.payload }
		case RealtyActionTypes.GET_APARTMENTS:
			return { ...state, apartments: action.payload }
		case RealtyActionTypes.GET_REALTY:
			return { ...state, realty: action.payload, realtyLimit: action.realtyLimit }
		case RealtyActionTypes.GET_ALL_REALTY:
			return { ...state, realtyCount: action.payload }
		case RealtyActionTypes.CHANGE_FAVORITE_COUNT:
			return { ...state, favoriteLength: action.payload }
		case RealtyActionTypes.GET_DETAILS:
			return { ...state, details: action.payload }
		case RealtyActionTypes.GET_FAVORITE:
			return { ...state, favorite: action.payload }
		case RealtyActionTypes.GET_SEARCH_REALTY:
			return { ...state, searchRealty: action.payload }
			case RealtyActionTypes.ADD_REALTY:
				return { ...state, addedRealty: action.payload }			
		default: return state
	}
}