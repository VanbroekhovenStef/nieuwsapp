import axios from 'axios';

const NewsItemBaseUrl = "http://nieuwsapp.test/api/news_items"

class NewsItemApi {
    getNewsItems() {
        return axios.get(NewsItemBaseUrl);
    }

    getNewsItem(id) {
        return axios.get(NewsItemBaseUrl + "/" + id)
    }
}

export default NewsItemApi;