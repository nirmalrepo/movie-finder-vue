
import instance from './api-axios';

async function apiRequest(endpoint, params) {
  try {
    const response = await instance.get(endpoint, { params });
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
  const response = apiRequest('/search/movie', params);
  return response
}
