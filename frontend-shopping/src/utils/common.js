export const userGet = () => {
    const userStorage = localStorage.getItem('user');
    if(userStorage) {
        return JSON.parse(userStorage)
    } else {
        return null
    }
}


export const getToken = () => {
    const token = localStorage.getItem('token');
    return token
}


export const setUserSession = (token, users) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(users));
}

export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}