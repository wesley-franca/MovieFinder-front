import api from "./api";

export function GetMovie(movieName) {
  const promise = api.get(`/movies/${movieName}`);
  return promise;
}