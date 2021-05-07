import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { AlbumCard } from '../../components/AlbumCard';
import './style.css';
import { Search } from '../../components/Search';
import { AlbumDetails } from '../../components/AlbumDetails';
import React from 'react';

export const stateAlbums: any = (state: RootState) => state.dzResults.albums;


export const Deezer = () => {
  const artistAlbums: any = useSelector(stateAlbums);

  return (
    <>
      <Search />
      <div>
      <hr className='mx-auto my-0 max-w-7xl space-x-4 mt-4' />
      <div className='flex mx-auto my-0 max-w-7xl p-12 space-x-4 lg:flex-row flex-row flex-wrap'>
     

    {artistAlbums.hasOwnProperty('error') ? <div className=" mx-auto my-0 max-w-7xl p-12 space-x-4"><h1 className='text-gray-100 text-center'>{artistAlbums.error.message} - Please Try Again!</h1></div> :  artistAlbums.data?.map((album: any, i: number) => {
          
          return (
            
            <AlbumCard
              image={album.cover_big}
              title={album.title}
              trackUrl={album.tracklist}
              key={i}
              id={album.id}
            />
           
          );
        })}

       
      </div>
      </div>
      <AlbumDetails  />
    </>
  );
};
