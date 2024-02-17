import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import {Videos, ChannelCard} from './'

const ChannelDetails = () => {
  const { id } = useParams();
  const  [channelDetail, setChannelDetail] = useState(null)
  const  [videos, setVideos] = useState([])

  console.log("Id is",id)
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => {
      setChannelDetail(data.items[0])
    })

    // Fetch Video based on channel
    fetchFromAPI(`search?channelId=${id}&order=date&part=snippet`)
    .then((data) => {
      setVideos(data?.items)
    })
  }, [id]);

  console.log(channelDetail, videos);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr: { sm: '100px'}}} />
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetails
