import {combineReducers} from 'redux'
import authReducer from './auth'
import pictureReducer from './picture'

export default  combineReducers({
    auth: authReducer,
    picture: pictureReducer
})