import axios from "axios";
import { SearchInfo } from "./deezerSlice";

export const getAlbumByArtist = async (name: string) => {
  const options = {
    url:
      "https://deezerdevs-deezer.p.rapidapi.com/search/album",
    params: { q: `${name}` },
    headers: {
      "x-rapidapi-key":
        "ebe9f51ea2msh6dc10341e934017p1495ecjsnf658fa0097a7",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  return await axios
    .request<{ data: SearchInfo[] }>(options)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const getAlbumTracks = async (id: string) => {
  const options = {
    url: `https://deezerdevs-deezer.p.rapidapi.com/album/${id}`,
    headers: {
      "x-rapidapi-key":
        "ebe9f51ea2msh6dc10341e934017p1495ecjsnf658fa0097a7",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  return await axios
    .request(options)
    .then((res) => {

      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
