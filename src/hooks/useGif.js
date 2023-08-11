import axios from "axios";
import { useEffect, useState } from "react";



const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
const randurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tag) => {
    const [gif, setGif] = useState('')
    const [load, setLoad] = useState('false')
    const tagurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    async function fetchData(){
      setLoad(true)
      const {data}=await axios.get(tag?tagurl:randurl);
      const imageSource=data.data.images.downsized_large.url;
      console.log(imageSource)
      setGif(imageSource)
      setLoad(false)
    }
    useEffect(()=>{
      fetchData();
    },[ ])  
    return{gif,load,fetchData}
};

export default useGif;
