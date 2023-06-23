import defaultImgUrl from '../assets/default.jpg'
export function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString(undefined, options);
  return formattedDate;
}

export function getThumbnail(posterPath) {
  const posterSize = 'w200';
  if (!posterPath) {
    return defaultImgUrl;
  }
  return `${import.meta.env.VITE_APP_IMAGE_BASE_URL}/${posterSize}/${posterPath}`;
}