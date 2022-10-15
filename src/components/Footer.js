import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
    return (
        <Box mt="20px" bgcolor="#133154">

            <Stack gap="10px" alignItems="center" px="10px" pt="10px">

                <img src={Logo} alt="logo" width="200px" height="40px" />

                <Typography variant='h6' pb='10px' mt='5px'>
                    copyright &copy;2022 olympia.com designed hy hossain.
                </Typography>

            </Stack>

        </Box>
    )
}

export default Footer