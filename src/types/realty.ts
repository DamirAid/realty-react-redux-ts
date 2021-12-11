export interface RealtyState {
	realty: any[]
	houses: any[]
	apartments: any[]
	realtyCount: number
	realtyLimit: number
	realtyPage: number
	favoriteLength: number
	details: IDetails
	favorite: IFavorite
	searchRealty: any[],
	addedRealty: IDetails
}

export enum RealtyActionTypes {
	GET_HOUSES = 'GET_HOUSES',
	GET_APARTMENTS = 'GET_APARTMENTS',
	GET_REALTY = 'GET_REALTY',
	GET_ALL_REALTY = 'GET_ALL_REALTY',
	CHANGE_FAVORITE_COUNT = 'CHANGE_FAVORITE_COUNT',
	GET_DETAILS = 'GET_DETAILS',
	GET_FAVORITE = 'GET_FAVORITE',
	GET_SEARCH_REALTY = 'GET_SEARCH_REALTY',
	ADD_REALTY = 'ADD_REALTY'

}

interface GetHouses {
	type: RealtyActionTypes.GET_HOUSES
	payload: any[]
}
interface GetApartments {
	type: RealtyActionTypes.GET_APARTMENTS
	payload: any[]
}
interface GetRealty {
	type: RealtyActionTypes.GET_REALTY
	payload: any[]
	realtyLimit: any
}
interface GetAllRealty {
	type: RealtyActionTypes.GET_ALL_REALTY
	payload: number
}
interface ChangeFavoriteCount {
	type: RealtyActionTypes.CHANGE_FAVORITE_COUNT
	payload: number
}
interface GetDetails {
	type: RealtyActionTypes.GET_DETAILS
	payload: IDetails
}
interface GetFavorite {
	type: RealtyActionTypes.GET_FAVORITE
	payload: IFavorite
}
interface GetSearchRealty {
	type: RealtyActionTypes.GET_SEARCH_REALTY
	payload: any[]
}
interface AddRealty {
	type: RealtyActionTypes.ADD_REALTY
	payload: IDetails
}


export interface IDetails {
	id?: number
	type?: string
	rooms?: number | string
	area?: number
	landArea?: number
	condition?: string
	severage?: string
	electricity?: string
	ceilHeight?: string
	description?: string
	price?: number
	phone?: string
	image?: any[]
	location?: string
	installment?: boolean
	exchange?: boolean
}
export interface IFavorite {
	realties?: any[]
}

export type RealtyAction = GetHouses
	| GetApartments
	| GetRealty
	| GetAllRealty
	| ChangeFavoriteCount
	| GetDetails
	| GetFavorite
	| GetSearchRealty
	| AddRealty
