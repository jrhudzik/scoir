import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'


// @todo pass onSubmit handler as prop for greater extensibility
const LoginForm = ({onSubmit}) => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    // do something with errors
    // e.g. error={password.length && password.length < 5}
    // const [errors, setErrors] = useState([])

    // maybe add a show password input
    // https://mui.com/material-ui/react-text-field/

    // add some flair w/ spinner if time

    return (
        <Box
            component="form"
            noValidate
            sx={{               
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',                            
                '& .MuiTextField-root': {
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
                label="username"
                required
                onChange={e => setUsername(e.target.value)} 
            />
            <TextField                
                label="password" 
                required
                onChange={e => setPassword(e.target.value)}
                type="password"
            />
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