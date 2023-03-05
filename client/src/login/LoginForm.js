import { useState } from 'react'
import {Button, Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import PropTypes from 'prop-types'


// @todo pass onSubmit handler as prop for greater extensibility
const LoginForm = ({onSubmit}) => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)

    // do something with errors
    // e.g. error={password.length && password.length < 5}
    // const [errors, setErrors] = useState([])

    // add some flair w/ spinner if time

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Box
            component="form"
            noValidate
            sx={{               
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',                            
                '& .MuiTextField-root, & .MuiFormControl-root': {
                    flexBasis: '70%',
                    m: '15px 0'
                },
                '& .MuiButtonBase-root': {
                    flexBasis: '30%',
                    m: 1
                }
            }}
        >
            <TextField 
                label="Username"
                required
                onChange={e => setUsername(e.target.value)} 
            />           
            <FormControl 
                required                
            >
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                    id="password"
                    label="Password"
                    onChange={e => setPassword(e.target.value)}              
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    
                />  
            </FormControl>
            <Button
                disabled={!username || !password}
                variant="contained" 
                onClick={() => onSubmit(username, password)}            
            >
                Login
            </Button>
        </Box> 
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default LoginForm