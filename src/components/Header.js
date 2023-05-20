import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import {Link} from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import { IconButton } from '@mui/material';

function Header() {

  const[{cart,user},dispatch]= useStateValue();
  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className='header text-white'>
      <Link to='/'>

        <div className='header__logo mx-5 mt-4'>
          <img alt="" src='https://www.pentalic.com/wp-content/uploads/2018/12/Amazon-logo-white-small.png'></img>

        </div>
      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type='text'/>
        <IconButton>
          <SearchIcon className='searchIcon mr-3'/>
        </IconButton>
      </div>
      <div className='header__nav flex justify-evenly'>
        <Link to={!user &&'/login'}>
          <div onClick={handleAuthentication} className='header__option flex flex-col'>
            <span className='header__optionLineOne'>{user?`Hello ${user.email}`:'Hello Guest'}</span>
            <span className='header__optionLineTwo'>{user?'Sign Out':'Sign In'}</span>
            
          </div>
        </Link>
        <div className='header__option flex flex-col'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>

        </div>
        <div className='header__option flex flex-col'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>

        </div>
      </div>
      <Link to='/checkout'>
        <div className="cart flex items-center ml-1">
          <ShoppingCartOutlinedIcon/>
          <span className='cartCount mr-3 ml-3'>{cart?.length}</span>
        </div>
      </Link>
    </div>
  )
}

export default Header