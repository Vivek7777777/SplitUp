import { useTheme } from "@emotion/react"
import { Box, Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { setMode } from "../state/slice/themeSlice";

export default function Login() {

    const { palette } = useTheme();
    const mode = useSelector(state => state.mode)
    const dispatch = useDispatch();

    console.log(mode);

    return (
        <>
            <Box
                backgroundColor={palette.background.alt}
            >
                demo
            </Box>
            Loginpage
            <Button onClick={() => dispatch(setMode())}>click</Button>
        </>
    )
}