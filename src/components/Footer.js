import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
    return (
        <Box mt="40px" bgcolor="#133154">

            <Stack gap="20px" alignItems="center" px="20px" pt="20px">

                <img src={Logo} alt="logo" width="200px" height="40px" />

                <Typography variant='h5' pb='20px' mt='10px'>
                    Made with Love by Hossain.
                </Typography>

            </Stack>

        </Box>
    )
}

export default Footer