import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useDebounce } from "../app/hooks";
import { stateAlbums } from "../features/deezer/Deezer";

import { getAlbumByArtist } from "../features/deezer/deezerAPI";
import {
  SearchInfo,
  updateAlbums,
} from "../features/deezer/deezerSlice";
import {
  SearchIcon,
} from "@heroicons/react/outline";

export const Search = () => {
  let [searchKey, setSearchKey] = useState("");
  const dispatch = useAppDispatch();
  const artistAlbums: any = useSelector(stateAlbums);

  const fetchData: (
    e: any,
    searchKey: string
  ) => Promise<{data:SearchInfo[]}> = async (
    e: any,
    searchKey: string
  ) => {
    e.preventDefault();
    return getAlbumByArtist(searchKey).then(
      (response: any) => {
        let res = response;
        if (res) {
          dispatch(updateAlbums(res));
          return res;
        }
      }
    );
  };

  const debouncedSearchTerm = useDebounce(searchKey, 500);

  const [suggestions, setSuggestion] = useState<string[]>(
    []
  );

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchData(
        { preventDefault: () => {} } as any,
        searchKey
      ).then((docs) => {
        if (!docs.hasOwnProperty('error')) {
          setSuggestion(docs.data?.map((res) => res.title));
        }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

 

  return (
    
    <div className="max-w-3xl 2xl:m-auto">
      <form
        className="mt-1 flex rounded-md shadow-sm"
        onSubmit={(e) => fetchData(e, searchKey)}
      >
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            name="email"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            list="suggestions"
            id="email"
            autoFocus={true}
            className="focus:ring-yellow-500 focus:border-yellow-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-yellow-400"
            placeholder="Search"
          />
        </div>
        <button
          className="relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ml-4"
          type="submit"
        >
          <SearchIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span>Search</span>
        </button>
      </form>

      <datalist id="suggestions">
        {suggestions.map((res, index) => {
          return <option key={index} value={res} />;
        })}
      </datalist>


      {artistAlbums.data?.length > 0 ? (
        <h3 className="my-6 text-white">
          Search Result for "{searchKey}"
        </h3>
      ) : (
        ""
      )}
    </div>
  );
};
