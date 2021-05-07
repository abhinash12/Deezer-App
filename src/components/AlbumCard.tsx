import { useAppDispatch } from '../app/hooks';
import { getAlbumTracks } from '../features/deezer/deezerAPI';
import {
  updateAlbumDetails,
} from '../features/deezer/deezerSlice';

export interface IProps {
  image: string;
  title: string;
  id?: number;
  trackUrl: string;
}

export const AlbumCard = (props: IProps) => {
  const dispatch = useAppDispatch();

  const fetchData = async (e: any, id: any) => {
    e.preventDefault();
    await getAlbumTracks(id).then((response: any) => {

      let data = response;

      if (data) {
        dispatch(updateAlbumDetails(data));
      }
    });
  };

  return (
    <>
      <div
        className=' border-green-100 mx-2 my-2 max-w-md'
        onClick={(e) => {
          fetchData(e, props.id);
        }} key={props.id}>
        <div className='space-y-4 w-32 cursor-pointer'>
          <div className='aspect-w-3 aspect-h-2'>
            <img className='object-cover shadow-lg' src={props.image} alt='' />
          </div>
          <div className='mt-1'>
            <h4 className='text-green-500 text-center truncate'>
              {props.title}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
