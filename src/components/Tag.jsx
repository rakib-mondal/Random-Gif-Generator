import { useState } from "react";

import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag() {

  const [tag, settag] = useState('')
  // const [gif, setGif] = useState('')
  // const [load, setLoad] = useState('false')
  // async function fetchData(){
  //   setLoad(true)
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data}=await axios.get(url);
  //   const imageSource=data.data.images.downsized_large.url;
  //   console.log(imageSource)
  //   setGif(imageSource)
  //   setLoad(false)
  // }
  // useEffect(()=>{
  //   fetchData();
  // },[])
  const {gif,load,fetchData}=useGif(tag);
  function clickHandler(){
        fetchData();
  }
  function changeHandler(event){
      settag(event.target.value)
  }

  return (
  <div className="w-1/2  bg-blue-500 rounded-lg flex flex-col items-center border border-blue-400 gap-5">
    <h1 className="text-2xl font-semibold font-serif underline cap my-2">
      Random {tag} Gif
    </h1>
    {
      load?(<Spinner/>):(<img src={gif}  alt="" className="m-4 p-5" width={450} /> )
    }
    <input type="text"
    className="bg-white w-10/12 text-lg p-2 rounded-md mb-5 text-center"
    onChange={changeHandler}
    value={tag }
     />
    <button onClick={clickHandler} className='bg-white w-10/12 text-lg p-2 rounded-md mb-5'>Generate</button>
  </div>
  );
}
