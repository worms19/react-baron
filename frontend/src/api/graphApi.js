import axios from 'axios';

/**
 * initialize the client with the base url
 */
const http = axios.create({
  baseURL: process.env.REACT_APP_DJANGO_API,
  responseType: 'json',
});

const VIDEOS_ENDPOINT = '/videos';
const SERIES_ENDPOINT = '/series';
const SEASON_ENDPOINT = '/season';
const MOVIES_ENDPOINT = '/movies';


const client = {
  /**
     * performs GET request to retrieve a single video by it's ID
     *
     * @param id
     *          video's id
     * @returns {Promise<void>}
     *          Video
     */
  getVideoById: async (id) => {
    const response = await http.get(`${VIDEOS_ENDPOINT}/${id}`);
    return new Video(response.data);
  },

  /**
     * performs GET request to retrieve videos list from searchbar entry
     * the param is optional, retrieve full video list instead if not provided
     *
     * @param name
     *          searchbar query, optional
     * @returns {Promise<void>}
     *          Pager
     */
  searchSeries: async (searchQuery) => {
    const params = searchQuery ? { search_query: searchQuery } : null;
    const response = await http.get(`${SERIES_ENDPOINT}/`, { params });
    return new SeriesPager(response.data);
  },

  searchMovies: async (searchQuery) => {
    const params = searchQuery ? { search_query: searchQuery } : null;
    const response = await http.get(`${MOVIES_ENDPOINT}/`, { params });
    response.data.results = response.data.results.map((result) => result.video_set.results[0]);
    return new MoviesPager(response.data);
  },


};


function SeriesPager(response) {
  this.count = response.count;
  this.series = response.results.map((serie) => new Serie(serie));
  this.nextPageUrl = response.next;
  this.previewsPageUrl = response.previous;
}

SeriesPager.prototype.getNextPage = async function () {
  const response = await http.get(this.nextPageUrl);
  this.videos = response.data.results.map((video) => new Serie(video));
  this.nextPageUrl = response.data.next;
};

export { client };
