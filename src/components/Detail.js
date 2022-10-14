import React from 'react';
import { Stack, Button, Typography } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ]

    return (
        <Stack
            gap="120px"
            sx={{
                flexDirection: { lg: "row" },
                p: "20px",
                m: "90px",
                alignItems: "center"
            }}>

            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

            <Stack sx={{ gap: { lg: "30px", xs: "15px" } }}>

                <Typography variant="h4">
                    <strong style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</strong>
                </Typography>

                <Typography variant="h6">
                    Exercise keep you strong. {name} is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
                </Typography>

                {extraDetail.map((item) => (
                    <Stack
                        key={item.name}
                        direction="row"
                        gap="24px"
                        alignItems="center">

                        <Button
                            sx={{
                                background: "#fff2db",
                                borderRadius: "50%",
                                width: "60px",
                                height: "60px"
                            }}>

                            <img src={item.icon} alt={bodyPart} style={{ width: "40px", height: "40px" }} />
                        </Button>

                        <Typography variant="h6" textTransform="capitalize">
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>

        </Stack>
    )
}

export default Detail