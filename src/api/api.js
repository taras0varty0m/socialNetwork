import axios from "axios";

const api = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "c135de20-f266-4bc0-8a34-944274bd9b97",
  },
});

const getUsers = (currentPage = 1, pageSize = 10) =>
  api
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);

const getUserProfile = (userId) =>
  api.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`);

const follow = (id) => api.post(`follow/${id}`, {});

const unfollow = (id) => api.delete(`follow/${id}`, {});

const authMe = () =>
  api.get("https://social-network.samuraijs.com/api/1.0/auth/me");
export { getUsers, follow, unfollow, getUserProfile, authMe };
