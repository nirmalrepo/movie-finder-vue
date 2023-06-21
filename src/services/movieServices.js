import axios from 'axios';

const API_KEY = '136d55d9c6878da748d19b6aa4870c86'; // Replace with your API key

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

async function apiRequest(endpoint, params) {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('API request failed');
  }
}
export async function fetchPopularMovies(page = 1) {
  const params = {
    page,
    sort_by: 'popularity.desc',
  };
  return apiRequest('/movie/popular', params);
}

export async function searchMovies(searchTerm, page = 1) {
  const params = {
    query: searchTerm,
    page,
  };
  return apiRequest('/search/movie', params);
}
