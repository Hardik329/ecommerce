import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import './Login.css'

import {auth} from "../firebase"

function Login() {

    const navigate = useNavigate();


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log('Success');
            navigate('/');
        })
        .catch(error=>alert(error.message));
    }

    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            // Success
            console.log(auth);
            navigate('/');
        })
        .catch(error=>alert(error.message))

    }



  return (
    <div className='login flex flex-col items-center bg-white h-screen'>
        <Link to='/'>
            <img className='login__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG13.png" alt=""  />
        </Link>

        <div className="login__container flex flex-col">
            <h1 className='font-medium mb-5 text-2xl'>Sign-in</h1>
            <form action="">
                <h5 className='font-bold'>E-mail</h5>
                <input type="text"  value={email} onChange={e=> setEmail(e.target.value)}/>
                <h5 className='font-bold'>Password</h5>
                <input type="password" value={password} onChange={e=> setPassword(e.target.value)}  />

                <button type='submit' onClick={signIn} className='login__signInButton font-medium'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to Amazon Clone's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice. 
            </p>

            <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
        </div>


    </div>
  )
}

export default Login