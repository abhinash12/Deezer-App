import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface DZState {
  albumDetails: Object;
  albums: Object;
  tracks: any;
}

const initialState: DZState = {
  albumDetails: {},
  albums: [],
  tracks: [],
};

export const DZSlice = createSlice({
  name: "dzResults",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateAlbumDetails: (
      state,
      action: PayloadAction<object>
    ) => {
      state.albumDetails = action.payload;
    },
    updateAlbums: (
      state,
      action: PayloadAction<object>
    ) => {
      state.albums = action.payload;
      state.albumDetails = {}
    },
    updateTracks: (
      state,
      action: PayloadAction<object>
    ) => {
      state.tracks = action.payload;
    },
  },
});
export const {
  updateAlbumDetails,
  updateTracks,
  updateAlbums,
} = DZSlice.actions;

export const selectAlbums = (state: RootState) =>
  state.dzResults.albums;

export default DZSlice.reducer;

export interface IAlbumDetails {
  id: number;
  title: string;
  upc: string;
  link: string;
  share: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  genre_id: number;
  genres: Genres;
  label: string;
  nb_tracks: number;
  duration: number;
  fans: number;
  rating: number;
  release_date: Date;
  record_type: string;
  available: boolean;
  tracklist: string;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  contributors: Contributor[];
  artist: Artist;
  type: string;
  tracks: Tracks;
  error:Error;
}

export interface Artist {
  id: number;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  type: string;
}

export interface Contributor {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  type: string;
  role: string;
}

export interface Genres {
  data: ArtistElement[];
}

export interface ArtistElement {
  id: number;
  name: string;
  picture?: string;
  type: string;
  tracklist?: string;
}

export interface Tracks {
  data: TracksDatum[];
}

export interface TracksDatum {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: ArtistElement;
  type: string;
}

export interface SearchInfo {
  id: number;
  title: string;
  link: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  genre_id: number;
  nb_tracks: number;
  record_type: RecordTypeEnum;
  tracklist: string;
  explicit_lyrics: boolean;
  artist: Artist;
  type: RecordTypeEnum;
  error:Error;
  data:SearchInfo
}

export interface Artist {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
}

export enum ArtistType {
  Artist = "artist",
}

export enum RecordTypeEnum {
  Album = "album",
  Compile = "compile",
  Single = "single",
}
