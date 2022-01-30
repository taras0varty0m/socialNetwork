import axios from "axios";

const api = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "c135de20-f266-4bc0-8a34-944274bd9b97",
  },
});
const UserAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return api
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  getUserProfile(userId) {
    return api.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    );
  },

  follow(id) {
    return api.post(`follow/${id}`, {});
  },

  unfollow(id) {
    return api.delete(`follow/${id}`, {});
  },
};
const AuthAPI = {
  authMe() {
    return api.get("https://social-network.samuraijs.com/api/1.0/auth/me");
  },
};
export { UserAPI, AuthAPI };
