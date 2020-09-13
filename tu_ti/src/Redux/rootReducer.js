import {combineReducers} from 'redux';
import{OanTuTiReducer} from './OanTuTiReducer'
// store tổng
export const  rootReducer = combineReducers({
    // Nơi sẽ chứa store con 
   OanTuTiReducer:OanTuTiReducer

})
