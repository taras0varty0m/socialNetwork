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

  follow(id) {
    return api.post(`follow/${id}`, {});
  },

  unfollow(id) {
    return api.delete(`follow/${id}`, {});
  },
};
const ProfileAPI = {
  getProfile(userId) {
    return api.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return api.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return api.put(`profile/status`, { status: status });
  },
};
const AuthAPI = {
  authMe() {
    return api.get("auth/me");
  },
  login({ email, password, remember, captcha }) {
    return api.post("auth/login", { email, password, remember, captcha });
  },
  logout() {
    return api.delete("auth/login");
  },
};
export { UserAPI, AuthAPI, ProfileAPI };
