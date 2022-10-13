import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
    return (
        <Stack sx={{ borderRadius: '24px' }}>
            <Link className='exercise-card' to={`/exercise/${exercise.id}`}>

                <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />

                <Typography
                    ml="21px"
                    fontWeight="bold"
                    color="white"
                    mt="11px"
                    pb="10px"
                    textTransform="capitalize"
                    fontSize="22px">

                    {exercise.name}
                </Typography>
            </Link>
        </Stack>
    )
}

export default ExerciseCard