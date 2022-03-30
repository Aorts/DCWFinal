import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFoods } from '../action/foodsAction'
import Food from '../components/Food'
import foods from '../foodsdata'

export default function Homescreen(){

    const dispatch = useDispatch()

    const foodsstate = useSelector(state=>state.getAllFoodsReducer)

    const {foods , error , loading} = foodsstate

    useEffect(() => {
        dispatch(getAllFoods())
    }, [])
    

    return(
        <div>
            <div className="row">

                {loading ? (
                    <h1> Loading ...</h1>
                    ) : error ? (
                    <h1> Something ...</h1>
                    ) : (
                        foods.map(food=>{

                            return<div className="col-md-4">
                                <div>
                                    <Food food={food}/>
                                    </div>
                                </div>
                                })

                    )}
            </div>
        </div>
    )
}