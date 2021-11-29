import { RootState } from './../redux/rootReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector