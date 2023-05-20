import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../reducer';
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import {useNavigate} from "react-router-dom"

function Payment() {
    const [{cart,user},dispatch] = useStateValue();
    const navigate=useNavigate();
    const stripe=useStripe();
    const elements=useElements();
    const [error,setError] =useState(null);
    const [disabled,setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret,setClientSecret]=useState(true);

    useEffect(()=>{
        const getClientSecret = async () => {
            const response = await axios({
                method:'post',
                url:`/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret)

        }
        getClientSecret();

    },[cart])


    const handleSubmit = async (event)=>{
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            navigate('/orders',{replace:true});
        })


    }
    const handleChange=event=>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")

    }

  return (
    <div className='payment bg-white'>
        <div className="payment__container">
            <h1 className='text-2xl font-semibold'>Checkout (<a href='/checkout'>{cart.length} items</a>)</h1>
            <div className="payment__section">
                <div className="payment__title">
                    <h3 className='font-bold text-lg'>Delivery Address</h3>
                </div>
                <div className="payment__address leading-tight">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Sriganganagar, Rajasthan</p>
                </div>
                
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3 className='font-bold text-lg'>Review item and delivery</h3>

                </div>
                <div className="payment__items">
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

            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3 className='font-bold text-lg'>Payment Method</h3>                    
                </div>
                <div className="payment__details">
                    <form action="" onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment__priceContainer">
                            <CurrencyFormat 
                            renderText={(value)=>(
                                <>
                                    <h3 className='text-lg font-bold'>Order Total: {value}</h3>
                        
                                </>
                                
                            )}
                            decimalScale={2}
                            value={getCartTotal(cart)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"}

                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Payment