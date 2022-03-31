import {combineReducers} from 'redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { getAllFoodsReducer } from './reducers/foodReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { addToCartReducer} from './reducers/cartReducer'
import { registerUserReducer } from './reducers/userReducer'


const finalReducer =  combineReducers({
    getAllFoodsReducer : getAllFoodsReducer,
    addToCartReducer : addToCartReducer,
    registerUserReducer : registerUserReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    addToCartReducer :{cartItems : cartItems},
    loginUserReducer : {
        currentUser : currentUser
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store