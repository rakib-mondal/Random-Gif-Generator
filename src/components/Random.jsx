
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
export default function Random() {

  const {gif,load,fetchData}=useGif();
  function clickHandler(){
        fetchData();
  }

  return (
  <div className="w-1/2  bg-green-500 rounded-lg flex flex-col items-center border border-blue-400 gap-5">
    <h1 className="text-2xl font-semibold font-serif underline cap my-2">
      Random Gif
    </h1>
    {
      load?(<Spinner/>):(<img src={gif}  alt="" width={450} className="m-4 p-5" /> )
    }
    
    <button onClick={clickHandler} className='bg-white w-10/12 text-lg p-2 rounded-md mb-5'>Generate</button>
  </div>
  );
}
