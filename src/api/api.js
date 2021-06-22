import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
  /*  headers: {
        "API_KEY": "9d63c975-d010-4719-b125-e04f0d4e93e4"
    }*/
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+userId)
            .then(response => response.data);
    },
    getAuthLogin() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}