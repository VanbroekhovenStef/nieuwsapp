import axios from 'axios';

const NewsItemsUrl = "https://www.vrt.be/vrtnws/nl/regio/_jcr_content/par/grid.app.json";

class NewsItemApi {
    getNewsItems() {
        return axios.get(NewsItemsUrl);
    }

    // getNewsItem(id) {
    //     return axios.get(NewsItemBaseUrl + "/" + id)
    // }
}

export default NewsItemApi;