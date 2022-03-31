import {combineReducers} from 'redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { getAllFoodsReducer } from './reducers/foodReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { addToCartReducer} from './reducers/cartReducer'



const finalReducer =  combineReducers({
    getAllFoodsReducer : getAllFoodsReducer,
    addToCartReducer : addToCartReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cartItems : cartItems
};

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store