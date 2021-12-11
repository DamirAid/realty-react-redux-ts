export function getCountRealtiesInFavorite() {
	// @ts-ignore
	let favorite = JSON.parse(localStorage.getItem('favorite'))
	return favorite ? favorite.realties.length : 0
}

export function checkRealtyInFavorite(id: number | undefined) {
// @ts-ignore
	let favorite = JSON.parse(localStorage.getItem('favorite'))
	if (!favorite) {
		favorite = {
			realties: []
		}
	}
	let newFavorite = favorite.realties.filter((elem: any) => elem.item.id === id)
	return newFavorite.length > 0 ? true : false
}