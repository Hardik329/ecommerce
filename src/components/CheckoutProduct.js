import React from 'react'
import { useStateValue } from '../StateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({id,image,title,price,rating}) {

    const [{cart,user},dispatch]=useStateValue();

    const removeFromCart=(item)=>{
        dispatch({
            type:'REMOVE_FROM_CART',
            id: id,
        })


    }
  return (
    <div className='checkoutProduct flex'>
        <img className='checkoutProduct__image' src={image} alt="" />
        <div className="checkoutProduct__info">
            <p className='checkoutProduct__title'>{title}
            </p>
            <p className='checkoutProduct__price'>
                <small>₹</small>
                <strong>{price}</strong>
                
            </p>
            <div className="checkoutProduct__rating flex">   {Array(rating)
                .fill()
                .map(()=>(<p>⭐</p>))}
            </div>
            <button onClick={removeFromCart}>Remove from cart</button>

        </div>
    </div>
  )
}

export default CheckoutProduct