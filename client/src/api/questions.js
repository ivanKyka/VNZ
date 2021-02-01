import {http} from "../utils/apiHelpers";

export function sendQuestion(data) {
    return http.post('/api/question', data, {
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
        }
    });
}

export function getAllQuestions() {
    return http.get('/api/questions/all')
}