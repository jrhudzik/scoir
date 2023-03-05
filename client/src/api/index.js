
const BASE_API_URL = process.env.REACT_APP_BASE_API_URL
const BASE_API_PORT = process.env.REACT_APP_BASE_API_PORT

const DEFAULT_INIT = {
    headers: {'Content-Type': 'application/json'},
    mode: 'cors'
}

export const login = async (username, password) => {
    try {
        const res = await fetch(``, {
            body: JSON.stringify({Username: username, Password: password}),
            method: 'POST',
            ...DEFAULT_INIT,
        })
        const data = res.json()
        return {data, status: res.status}
    } catch(e) {}
}