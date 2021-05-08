import { RootState } from "../app/store";
import "./style.css";
import { useSelector } from "react-redux";
import { IAlbumDetails } from "../features/deezer/deezerSlice";

const formatTime =(sec :number)=>{
  
  var minutes = Math.floor(sec / 60);
  var seconds = sec - minutes * 60;
  let result ='';
  result += "" + minutes + ":" + (seconds < 10 ? "0" : "");
  result += "" + seconds;
  return result
}

export const AlbumDetails = (props:any) => {
  const stateAlbumDetails: any = (state: RootState) =>
    state.dzResults.albumDetails;

  const data = useSelector<any, IAlbumDetails>(
    stateAlbumDetails
  );
  if (Object.keys(data).length === 0) {
    return <></>;
  }
  else if(data.hasOwnProperty('error')){
    
    return <>
    <div className=" mx-auto my-0 max-w-7xl p-12 space-x-4"><h1 className='text-gray-100 text-center'>{data.error.message} - Please Try Again!</h1></div>
    </>;
  }

  return (
    
    <>
      {data ?
      <>
      <hr className=" mx-auto my-0 max-w-7xl space-x-4 "/>

      <div className="flex mx-auto my-0 max-w-7xl p-12 space-x-4 lg:flex-row flex-col">
        <div className="sm:relative block sm:left-44 left-0">
          <img
            className="w-36 rounded shadow-lg"
            src={data.cover}
            alt=""
          />
        </div>

        <div className="flex flex-col">
          <div className="text-2xl text-green-600 text-left mb-3 sm:ml-44 ml-0">
            {data.title}
          </div>

          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y">
                    <thead className="">
                      <tr>
                        <th className="w-44" />
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Artist
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Time
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Released
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      className="text-white 2xl:bg-gray-800"
                      style={{ backgroundColor: "#2a2a2a" }}
                    >
                      {data.tracks?.data.map(
                        (track, index) => (
                          <tr key={index}>
                            <td className="w-12 border-none"></td>
                            <td className="px-6 py-4 whitespace-nowrap border-opacity-10 border-b-2 border-black">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  {index + 1}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-opacity-10 border-b-2 border-black">
                              <div className="text-sm">
                                {track.title}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-opacity-10 border-b-2 border-black">
                              <div className="text-sm">
                                {track.artist.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-opacity-10 border-b-2 border-black">
                              <span className="text-sm">
                                {formatTime(track.duration)}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm border-opacity-10 border-b-2 border-black">
                              {data.release_date}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
      : ''}
       
    </>
  );
};
