import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider'

function Subtotal() {

    const [{cart,user},dispatch] =useStateValue();
    const total=cart?.reduce((sum,num)=>sum+num.price,0);
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
            value={total}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}

            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal