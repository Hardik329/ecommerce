export const initialState = {
    cart: [],
    user: null,
};

const reducer =(state,action)=> {
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart:[...state.cart,action.item],
            };

        case 'REMOVE_FROM_CART':
            const index= state.cart.findIndex(
                (cartItem)=> cartItem.id === action.id
            );
            let temp=[...state.cart];

            temp.splice(index,1);
            return{
                ...state,
                cart:temp
            }

        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
    }

};

export const getCartTotal = (cart)=>{
    const total=cart?.reduce((sum,num)=>sum+num.price,0);
    return total;
}

export default reducer;