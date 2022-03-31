import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Cartscreen() {
    const cartstate = useSelector(state => state.addToCartReducer)
    const cartItems = cartstate.cartItems
    var subtotal = cartItems.reduce((x, item) => x + item.price, 0)
    return (<div>
        <div className="row justify-content-center">

            <div className="col-md-6">
                <h2 style={{ fontSize: '40px' }}>
                    My Cart
                </h2>
                {cartItems.map(item =>
                    <div className="flex-container">


                        <div className="text-left m-1 w-100">
                            <h1>
                                {item.name} [{item.varient}]
                            </h1>
                            <h1>
                                Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price} THB
                            </h1>
                            <hr />
                        </div>

                    </div>
                )}

                <div className="text-left m-1 w-100">
                    <h2 style={{ fontSize: '40px' }}>subtotal = {subtotal} THB</h2>

                </div>
            </div>

        </div>
    </div>
    )
}