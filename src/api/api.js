import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
  /*  headers: {
        "API_KEY": "18d633de-1d3c-4640-be53-f62a0ce8243a"
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