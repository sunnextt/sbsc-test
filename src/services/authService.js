import slooveApi from './api';
import ExpirySession from '../utils/expirysession';

const register = async (email, password) => {
    const response = await slooveApi.post('/register', {
        email,
        password
    });
    if (response.data) {
        ExpirySession.set('user', JSON.stringify(response.data));
    }
    return response.data;
};

const login = async (email, password) => {
    const response = await slooveApi.post('/login', {
        email,
        password
    });
    console.log(response.data);
    if (response.data) {
        ExpirySession.set('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    const response = slooveApi.post('/logout');
    console.log(response);
    ExpirySession.clear('user');
    window.location.reload();
};

const refreshToken = (dispatch) => async () => {
    const user = await ExpirySession.get('user');
    if (user) {
        return;
    } else {
        login();
    }
};

const authService = {
    register,
    login,
    refreshToken,
    logout
};
export default authService;
