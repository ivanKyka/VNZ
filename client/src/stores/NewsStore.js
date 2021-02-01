import {observable, action, makeObservable} from "mobx";
import {getNews} from "../api/news";

export default class NewsStore {

    @observable news = [];
    @observable length = [];
    @observable isLoading = false;
    pages = 1;

    constructor() {
        makeObservable(this)
    }

    @action.bound
    addNews(data) {
       this.news.push(...data);
    }

    @action.bound
    setLength(length) {
        this.length = length;
    }

    @action.bound
    getMoreNewsFromApi() {
        this.isLoading = true;
        getNews(this.pages).then(resp => {
            this.addNews(resp.data);
            this.setLength(resp.length);
            this.pages++
            this.isLoading = false;
        })
    }

}