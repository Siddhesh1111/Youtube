import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI} from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);


  // Use Effect is used to fetch all the data from the api and display on the database every time it is rendered
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      setVideos(data.items)
    })
  }, [selectedCategory]);


  return (
    <Stack sx = {{flexDirection: {sx: "column", md: "row"}}}>
      {/* This Box was to implement the side bar */}
      <Box sx= {{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography className='copyright'
        variant='"body2' sx={{mt: 1.5,
        color: '#fff'}}>
          Copyright 2024 Sid's Youtube
        </Typography>
      </Box>

      {/* This Box is to implement the feed and the data is being pullled from the youtube api */}
      <Box p={2} sx = {{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{color: '#F31503'}}>Videos</span>
        </Typography>
        {/* The following code is used for displaying the video titles in a stack of boxes */}
        <Videos videos = {videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
