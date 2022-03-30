import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFoods } from '../action/foodsAction'
import Food from '../components/Food'
import foods from '../foodsdata'

export default function Homescreen(){

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllFoods())
    }, [])




    return(
        <div>
            <div className="row">

                {foods.map(food=>{

                    return<div className="col-md-4">
                        <div>
                            <Food food={food}/>
                            </div>
                        </div>
                
                })}
            </div>
        </div>
    )
}