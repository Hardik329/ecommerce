import React from 'react'
import Product from "./Product"
import './Home.css'
function Home() {
  return (
    <div className='home flex justify-center mx-auto'>
        <div className="home__container">
            <div className="home__image">
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/HSS_MAR22/LA_TV_OHL/HK_1500x500-UNREC.jpg' alt=''></img>

                <div className="home__row">
                    <Product title='Startup' price={50} rating={4} image='https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_SY200_.jpg' />
                    <Product title='Startup' price={66.66} rating={4} image='https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_SY200_.jpg' />
                    
                </div>

                <div className="home__row">
                <Product title='Startup' price={50} rating={4} image='https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_SY200_.jpg' /><Product title='Startup' price={50} rating={4} image='https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_SY200_.jpg' /><Product title='Startup' price={50} rating={4} image='https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_SY200_.jpg' />

                </div>
                
                <div className="home__row">
                <Product title='Startup' price={50} rating={4} image='https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_SY200_.jpg' /><Product title='Startup' price={50} rating={4} image='https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_SY200_.jpg' /><Product title='Startup' price={50} rating={4} image='https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_SY200_.jpg' /><Product title='Startup' price={50} rating={4} image='https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_SY200_.jpg' />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Home