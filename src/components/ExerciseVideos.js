import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {

    return (
        <Box
            sx={{ marginTop: { lg: "150px", xs: "20px" } }}
            m="50px 90px 50px 90px"
            p="20px">
            <Typography variant="h4" mb="50px">
                Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
            </Typography>

            <Stack
                justifyContent="flex-start"
                flexWrap="wrap"
                alignItems="center"
                sx={{
                    flexDirection: { lg: "row" },
                    gap: { lg: "80px", xs: "10px" }
                }}
            >
                {exerciseVideos?.slice(0, 6).map((item, index) => (
                    <a
                        key={index}
                        className="exercise-video"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box>
                            <Typography variant="h6" style={{ color: '#9e9e9e' }}>
                                {item.video.title}
                            </Typography>

                            <Typography variant="p" style={{ color: '#9e9e9e' }}>
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}



            </Stack>
        </Box>
    )
}

export default ExerciseVideos