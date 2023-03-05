import { useState } from 'react'
import { Alert, Box, Typography } from '@mui/material'

import { login } from '../api'
import LoginForm from './LoginForm'

const LoginPage = () => {

    const [loginResponse, setLoginResponse] = useState(null)
    
    const handleSubmit = async (username, password) => {
        try {   
            const {data, status} = await login(username, password)
            setLoginResponse({msg: data.Msg, severity: status === 200 ? 'success' : 'error'})
        } catch(e) {
            console.error(e)
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
                        width: '66%'
                    }}
                >
                    {loginResponse.msg}
                </Alert>
            }
        </Box>
    )
}

export default LoginPage