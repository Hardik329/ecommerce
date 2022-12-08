import React from 'react'
import Subtotal from "./Subtotal"
import "./Checkout.css"
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const [{cart,user},dispatch] =useStateValue();
    
    
    return (
        <div className='checkout w-full mb-2 bg-white   '>
            <div className="checkout__left">
                <div className="checkout__ad w-full mb-2">
                    <img src='data:image/png;base64,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' alt=''/>
        
                </div>
                <h3 className='font-bold text-lg'>Hello, {user?.email}</h3>
                <div className="checkout__title font-bold text-2xl mr-2 p-2">
                    <h2>Your Shopping Cart</h2>
                </div>
                {cart.map(item=>(
                    <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                     />

                ))}
            </div>

            <div className="checkout__right">
                <Subtotal/>

            </div>
        </div>
    )
}

export default Checkout