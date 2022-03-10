import http from "../http-common";

class userDataService {
    getAll(page = 0) {
        return http.get(`?pages${page}`);
    }

    get(id) {
        return http/this.get(`/id/${id}`);
    }

    find(query, by = "name", page = 0) {
        return http.get(`?${by}=${query}&page=${page}`);
    }
}

export default new userDataService();