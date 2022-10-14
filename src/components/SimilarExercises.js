import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: "80px", xs: "10px" } }}
            m="50px 90px 50px 90px"
            p="20px"
        >

            <Typography variant="h4" mt="50px" mb="50px">
                Exercises that target the same muscle group.
            </Typography>

            <Stack direction="row" sx={{ position: "relative" }}>

                {targetMuscleExercises.length ?
                    <HorizontalScrollbar data={targetMuscleExercises} />
                    : <Loader />
                }
            </Stack>


            <Typography variant="h4" mt="70px" mb="50px">
                Exercises that use the same equipment.
            </Typography>

            <Stack direction="row" sx={{ position: "relative", p: '5' }}>

                {equipmentExercises.length ?
                    <HorizontalScrollbar data={equipmentExercises} />
                    : <Loader />
                }

            </Stack>

        </Box>
    )
}

export default SimilarExercises