const API_BASE_URL = 'http://localhost:8000'

const DEFAULT_INIT = {
    headers: {'Content-Type': 'application/json'},
    mode: 'cors'
}

export const login = async (username, password) => {
    const res = await fetch(`${API_BASE_URL}/login`, {
        body: JSON.stringify({Username: username, Password: password}),
        method: 'POST',
        ...DEFAULT_INIT,
    })
    const data = await res.json()       
    return {data, status: res.status}    
}