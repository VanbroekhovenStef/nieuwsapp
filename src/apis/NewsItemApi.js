import axios from 'axios';

const NewsItemBaseUrl = "http://nieuwsapp.test/api/news_items"
const NewsItemCanvasUrl = "https://www.vrt.be/vrtnws/nl/regio/_jcr_content/par/grid.app.json"

class NewsItemApi {
    getNewsItems() {
        return axios.get(NewsItemBaseUrl);
    }

    getNewsItem(id) {
        return axios.get(NewsItemBaseUrl + "/" + id)
    }
}

export default NewsItemApi;