import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Cartscreen() {
    const cartstate = useSelector(state => state.addToCartReducer)
    const cartItems = cartstate.cartItems
    return (<div>
        <div className="row justify-content-center">

            <div className="col-md-6">
                <h2 style={{ fontSize: '40px' }}>
                    My Cart {cartItems.length}
                </h2>
                {cartItems.map(item =>
                        <div className="flex-container">
                            <div>
                                <h1>
                                    {item.name}
                                </h1>
                                <h1>
                                    {item.price}
                                </h1>
                            </div>
                        </div>
                )}
            </div>

        </div>
    </div>
    )
}