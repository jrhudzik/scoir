import { useCallback, useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// @todo pass onSubmit handler as prop for greater extensibility
const LoginForm = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    // do something with errors
    // e.g. error={password.length && password.length < 5}
    // const [errors, setErrors] = useState([])

    // maybe add a show password input
    // https://mui.com/material-ui/react-text-field/

    // add some flair w/ spinner if time

    const handleSubmit = useCallback(async () => {
        alert('Hook me up to something cool!')
        const res = await fetch('')
    })

    return (
        <Box
            component="form"
            noValidate
            sx={{               
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: 5,
                width: 400,
                '& .MuiTextField-root': {
                    flexBasis: '70%',
                    m: 2,
                },
                '& .MuiButtonBase-root': {
                    flexBasis: '35%',
                    m: 2
                }
            }}
        >
            <TextField 
                label="username"
                required
                onChange={e => setUsername(e.target.value)} 
            />
            <TextField                
                label="password" 
                required
                onChange={e => setPassword(e.target.value)}
            />
            <Button
                disabled={!username || !password}
                variant="contained" 
                onClick={handleSubmit}              
            >
                Login
            </Button>
        </Box> 
    )
}

export default LoginForm