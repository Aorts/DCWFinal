import axios from 'axios';
export const getAllFoods=()=>dispatch=>{

    dispatch({type:'GET_FOODS_REQUEST'})

    try {
        const response = axios.get('/api/foods/getFoods')
        console.log(response);
        dispatch({type:'GET_FOODS_SUCCESS'})
    } catch (err){
        dispatch({type:'GET_FOODS_FAILED'})
    }

}