import axios from 'axios';

const URL = 'https://5hj71v72dh.execute-api.us-east-2.amazonaws.com/Prod/items';

export const getAllUsers = async () => (
    await axios.get(URL)
).data;

export const getUserInfoFromAllUsers = (userId, allUsers) => (
    allUsers.find(u => u.id === userId)
);