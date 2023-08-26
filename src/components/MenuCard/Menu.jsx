import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import MenuCard from './MenuCard'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Menu = () => {
  const MenuData=useSelector(state=>state.MenuStore.value.sampleMenu)
  return (
    <Box id='Menu'>
    <Typography className='first-title' variant='h6'>Specialties</Typography>
    <Typography className='second-title' variant='h4'>Our Menu</Typography>
    <Box className="menu-container">
    {
      // Home Page Menu Mapping
      MenuData.length ? MenuData.map((item,index)=><MenuCard key={index} MenuItem={item}/>) : <Typography component='p'> No Items</Typography>
    }
    </Box>
    <Typography sx={{textAlign:'center',padding:5}}>
      <Link to='/menu'>
      <Button color='error' variant='outlined'>View Menu</Button>
      </Link>
    </Typography>
  </Box>
  )
}

export default Menu