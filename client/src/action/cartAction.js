export const addtocart = (food, quantity, varient) => (dispatch , getState) => {
    var cartItem = {
        name: food.name,
        _id: food.id,
        images: food.images,
        varient: varient,
        quantity : quantity,
        prices: food.prices,
        price: food.prices[0][varient] * quantity
    }

    dispatch({ type: 'ADD_TO_CART', payload: cartItem })

    const cartItems = getState().addToCartReducer.cartItems

    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
}