import { useTheme } from "@emotion/react";
import Form from "./Form";
import { Box, useMediaQuery, Typography } from "@mui/material";



export default function Login() {

    const theme = useTheme();

    return (
        <>
            <Typography
                variant="h3"
                bgcolor={theme.palette.background.alt}
                p='1rem'
                textAlign='center'
                fontWeight='bold'
                color={theme.palette.primary.main}
            >
                SplitUp
            </Typography>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
            >

                <Box
                    display={'flex'}
                    m='2rem'
                    p='2rem'
                    height='100%'
                    bgcolor={theme.palette.background.alt}
                    justifyContent='center'
                    alignItems='center'
                    borderRadius='1rem'
                >

                    <Form />
                </Box>
            </Box>
        </>
    )
}