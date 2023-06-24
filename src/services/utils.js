import moment from "moment";
import defaultImgUrl from "../assets/default.jpg";

export function formatDate(date) {
  const formattedDate = moment(date).format("MMMM DD, YYYY");
  return formattedDate;
}

export function getThumbnail(posterPath) {
  const posterSize = "w200";
  if (!posterPath) {
    return defaultImgUrl;
  }
  return `${
    import.meta.env.VITE_APP_IMAGE_BASE_URL
  }/${posterSize}/${posterPath}`;
}
