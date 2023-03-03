import LoginForm from "./LoginForm"

import { Box, Typography } from "@mui/material"

const LoginPage = () => {

    const handleSubmit = useCallback(async () => {
        alert('Hook me up to something cool!')
        const res = await fetch('')
    })

    return (
        <Box
            sx={{margin: 'auto'}}
        >
            <Typography variant="h5" component="h1">Scoir</Typography>
            <LoginForm />
        </Box>
    )
}

export default LoginPage