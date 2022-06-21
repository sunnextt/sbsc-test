import slooveApi from './api';

const getUsers = async (page) => {
    const response = await slooveApi.get(`/users`);
    return response.data;
};

const getSingleUser = async (id) => {
    const response = await slooveApi.get(`/users/${id}`);
    return response.data;
};

const updateUser = async (id, email, first_name, last_name) => {
    const response = await slooveApi.put(`/users/${id}`, {
        email,
        first_name,
        last_name
    });
    return response;
};

const deleteUser = async (id) => {
    const response = await slooveApi.delete(`/users/${id}`);
    return response;
};

const userService = {
    getSingleUser,
    updateUser,
    getUsers,
    deleteUser
};

export default userService;
