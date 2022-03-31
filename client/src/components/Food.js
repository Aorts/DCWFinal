import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../action/cartAction';

export default function Food({ food }) {
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('small')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
function addToCart() {
    dispatch(addtocart(food, quantity, varient))
}

    return (
        <div  className="shadow-lg p-3 mb-5 bg-white rounded"
            key={food._id}
        >
            <div onClick={handleShow}>
                <h1>{food.name}</h1>
                <img src={food.image} className="img-fluid" style={{ height: '200px', width: '200px' }} />
            </div>

            <div className="flex-container">

                <div className='w-100 m-1'>
                    <p>Varients</p>
                    <select className='form-control' value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                        {food.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>

                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {

                            return <option value={i + 1}>{i + 1}</option>

                        })}
                    </select>
                </div>

            </div>

            <div className="flex-container">
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Price : {food.prices[0][varient] * quantity} THB </h1>
                </div>
                <div className='m-1 w-100'>
                    <button className="btn" onClick={addToCart}>ADD TO CART</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{food.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={food.image} className="img-fluid" style={{ height: '200px'}}/>
                    <p>{food.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>close</button>
                </Modal.Footer>

            </Modal>
        </div>
    )
}