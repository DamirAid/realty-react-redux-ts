import { IDetails } from './../types/realty';
import axios from "axios"
import { Dispatch } from "react"
import {RealtyAction, RealtyActionTypes } from "../types/realty"

export const getHouses = () => {
	return async (dispatch: Dispatch<RealtyAction>) => {
		const { data } = await axios('http://localhost:8000/houses?type=Дом')
		dispatch({
			type: RealtyActionTypes.GET_HOUSES,
			payload: data
		})
	}
}

export const getApartments = () => {
	return async (dispatch: Dispatch<RealtyAction>) => {
		const { data } = await axios('http://localhost:8000/houses?type=Квартира')
		dispatch({
			type: RealtyActionTypes.GET_APARTMENTS,
			payload: data
		})
	}
}


export const getRealty = (params = '', page = 1, limit = '3') => {
	return async (dispatch: Dispatch<RealtyAction>) => {
		const { data } = await axios(`http://localhost:8000/houses/?${params}&_limit=${limit}&_page=${page}`)
		dispatch({
			type: RealtyActionTypes.GET_REALTY,
			payload: data,
			realtyLimit: limit
		})
	}
}

export const getAllRealty = (params = '') => {
	return async (dispatch: Dispatch<RealtyAction>) => {
		const { data } = await axios(`http://localhost:8000/houses/?${params}`)
		dispatch({
			type: RealtyActionTypes.GET_ALL_REALTY,
			payload: data.length
		})
	}
}

export const getDetails = (id: number) => {
	return async (dispatch: Dispatch<RealtyAction>) => {
		const { data } = await axios(`http://localhost:8000/houses/${id}`)
		dispatch({
			type: RealtyActionTypes.GET_DETAILS,
			payload: data
		})
	}
}

export const addRealtyToFavoriteList = (realty: IDetails) => {
	let favorite = JSON.parse(localStorage.getItem('favorite') || "")
	if (!favorite) {
		favorite = {
			realties: []
		}
	}
	let newRealty = {
		item: realty
	}
	let filteredFavorite = favorite.realties.filter((elem: any)  => elem.item.id === realty.id)
	if (filteredFavorite.length > 0) {
		favorite.realties = favorite.realties.filter((elem: any) => elem.item.id !== realty.id)
	} else {
		favorite.realties.push(newRealty)
	}
	localStorage.setItem('favorite', JSON.stringify(favorite))
	return {
		type: RealtyActionTypes.CHANGE_FAVORITE_COUNT,
		payload: favorite.realties.length
	}
}

export const getFavorite = () => {
	let favorite = JSON.parse(localStorage.getItem('favorite') || "")
	if (!favorite) {
		favorite = {
			realties: []
		}
	}
	return {
		type: RealtyActionTypes.GET_FAVORITE,
		payload: favorite
	}
}

export const getSearchRealty = (value: string | null) => {
	return async (dispatch: Dispatch<RealtyAction>) => {
		const { data } = await axios(`http://localhost:8000/houses?q=${value}`)
		dispatch({
			type: RealtyActionTypes.GET_SEARCH_REALTY,
			payload: data
		})
	}
}