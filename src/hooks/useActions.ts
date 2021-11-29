import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as RealtyActionCreators from '../redux/actions'

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(RealtyActionCreators, dispatch)
}