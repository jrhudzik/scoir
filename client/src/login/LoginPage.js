import { useState } from 'react'
import { Alert, Box, Typography } from '@mui/material'

import LoginForm from './LoginForm'

const LoginPage = () => {

    const [loginResponse, setLoginResponse] = useState(null)

    const handleSubmit = async (username, password) => {
        try {
            const res = await fetch('http://localhost:8000/login', {
                body: JSON.stringify({
                    Username: username, 
                    Password: password
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                mode: 'cors'
            })
            const data = await res.json()            
            // normally the application would be redirecting, but for demo we'll show a message on same page
            setLoginResponse({msg: data.Msg, severity: res.status === 200 ? 'success' : 'error'})
        } catch(e) {
            // we'd do something to handle error and give user feedback
        }
    }


    return (
        <Box
            sx={{
                margin: '50px auto',
                maxWidth: '900px',
                width: '50%',              
                padding: 2
            }}
        >
            <Typography variant="h3" component="h1" sx={{textAlign: 'center', m: 2}}>Scoir Login</Typography>
            <LoginForm onSubmit={handleSubmit} />
            {loginResponse && 
                <Alert 
                    severity={loginResponse.severity} 
                    sx={{
                        margin: '25px auto', 
                        width: 'calc(70% - 16px)'
                    }}
                >
                    {loginResponse.msg}
                </Alert>
            }
        </Box>
    )
}

export default LoginPage