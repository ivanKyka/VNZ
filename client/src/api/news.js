import {http} from "../utils/apiHelpers";

export async function getNews(page = 1) {
    return http.get(`/api/news?page=${page}`);
}
