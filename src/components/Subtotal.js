import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { getCartTotal } from '../reducer';


function Subtotal() {
    const navigate=useNavigate();
    
    const [{cart,user},dispatch] = useStateValue();
    
    return (
        <div className='subtotal'>
            <CurrencyFormat 
            renderText={(value)=>(
                <>
                    <p>
                        Subtotal ({cart.length} items): <strong>{value}</strong>

                    </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox"/> This order contains a gift
                    </small>
                </>
                
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}

            />
            <button onClick={()=>navigate(user?'/payment':'/login',{replace:true})} className='checkout__button'>{user?'Proceed':'Sign in'} to checkout</button>
            
        </div>
    )
}

export default Subtotal