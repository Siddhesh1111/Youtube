import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

import {logo} from '../utils/constant'
const Navbar = () => {
  return (
    //indentation of navigation bar
    <Stack direction="row"
     alignItems="center" 
     p ={2} 
     sx = {{position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
    >
      <Link to = "/" style={{display: 'flex', //Used a log as href to home page
      alignItems: 'center' }}>
        <img src={logo} alt='Logo' height= {50}/>
      </Link>
      <SearchBar />  
    </Stack>
  )
}

export default Navbar
