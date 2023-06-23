# Movie Finder Vue

Movie Finder Vue is a web application built with Vue.js, Vuex, and TailwindCSS that allows users to search for movies and view details such as the title, release date, and poster image. It integrates with the [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) to fetch movie data. The application follows the principles of Atomic Design for its component structure and design system.

## Features

- Search for movies by title
- View movie details including title, release date, and the poster
- Responsive design for optimal viewing on different devices
- Popular Movies Slider

## Demo

A live demo of the Movie Finder Vue application is available [here](https://movie-finder-vue.vercel.app/).

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/nirmalrepo/movie-finder-vue.git
2. Navigate to the project directory:

  ```shell
  cd movie-finder-vue
  
3. Install the dependencies:

   ```shell
   npm install
4. Obtain an API key from the OMDb API by registering for a free account.
5. Create a `.env` file in the root directory of the project and add your API key:

   ```plaintext
   VITE_APP_API_BASE_URL=https://api.themoviedb.org/3
   VITE_APP_API_KEY=YOUR_API_KEY_HERE
   VITE_APP_IMAGE_BASE_URL=https://image.tmdb.org/t/p/
6. Start the development server:

   ```shell
   npm run dev
7. Open your browser and visit `http://localhost:{port}` to view the application.

## Technologies Used

- Vue.js - JavaScript framework for building user interfaces
- Vuex - State management pattern and library for Vue.js applications
- Axios - Promise-based HTTP client for making API requests
- TailwindCSS - Utility-first CSS framework for styling the application
- TMDB API - Open movie database API for fetching movie data

## Vue Libraries Used

- [The Awesome Vue.js 3 Pagination Library](https://github.com/peshanghiwa/vue-awesome-paginate) - Pagination component for Vue.js applications 
- [Vue 3 Carousel](https://www.npmjs.com/package/vue3-carousel) - Carousel component for Vue.js applications
- [vue3-lazyload](https://github.com/murongg/vue3-lazyload) - Lazy loading image component for Vue.js applications
- [vue3-progressbar](https://github.com/aacassandra/vue3-progressbar)- Progress bar component for Vue.js applications




