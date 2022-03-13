import React from 'react'
import Food from '../components/Food'
import foods from '../foodsdata'

export default function Homescreen(){
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