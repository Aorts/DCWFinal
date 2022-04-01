import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../action/userActions';


export default function Navbar() {
    const cartstate = useSelector(state => state.addToCartReducer)
    const cartItems = cartstate.cartItems
    const dispatch = useDispatch()

    // const userstate = useSelector(state => state.loginUserReducer)
    //const currentUser = userstate

    return (
        <div>



            <nav className="navbar navbar-expand-lg shadow-lg p-3 bg-white rounded">
                <div className='container-fluidit'>
                    <a className="navbar-brand" href="/">
                        ChangFood
                    </a>
                </div>




                <div className="navbar-collapse" id="navbarNav">
                    <div class="d-flex justify-content-end"> <div class="mr-auto p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                    <div class="p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                        <div class="p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                        <div class="d-flex justify-content-end"> <div class="mr-auto p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                    <div class="p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                        <div class="p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div> 
                    </div>
                    <div class="d-flex justify-content-end"> <div class="mr-auto p-16">  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                    <div class="p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                        <div class="p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div> 
                    </div>
                    <ul className="navbar-nav mr p-2">


                        <li className="nav-item">
                            <a className="nav-link text-center" href="/login">
                                Login
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                Cart {cartItems.length}
                            </a>
                        </li>

                        <li className="nav-item">
                            <i className="fa fa-sign-out fa-2x mt-1 " aria-hidden="true" onClick={() => { dispatch(logoutUser()) }}></i>
                        </li>

                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}