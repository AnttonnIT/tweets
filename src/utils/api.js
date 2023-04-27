import axios from 'axios';
import { BASE_URL, limit } from 'refs/constants';

axios.defaults.baseURL = BASE_URL;

const searchParams = new URLSearchParams({
  limit,
});

export const getUsers = async (page = 1) => {
  try {
    const { data } = await axios.get(`/users?${searchParams}&page=${page}`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
