import React from 'react'
import { useStateValue } from '../StateProvider';
import './Product.css'

function Product({id, title,image,price,rating}) {

    const [{cart},dispatch] = useStateValue();
    

    const addToCart =()=>{
        // dispatch the item into data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title : title,
                image: image,
                price: price,
                rating: rating
            },
        });

    };

  return (
    <div className='product flex flex-col border-4 items-center justify-end'>
        <div className="product__info h-24 mb-4">
            <p>{title}</p>
            <div className='product__price flex mt-1'>
                <span className='text-sm mr-0.5'>₹</span>
                <span className='font-semibold'>{price}</span>
            </div>
            <div className="product__rating flex">
                {Array(rating)
                    .fill()
                    .map((_)=>(
                    <p>⭐</p>
                ))}
            </div>

        </div>
        <img src={image} alt=''/>
        <button onClick={addToCart}>Add to cart</button>


    </div>
  )
}

export default Product