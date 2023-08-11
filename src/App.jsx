import  Random  from "./components/Random";
import  Tag  from "./components/Tag";



export default function App() {
  return (
    <div className="w-full h-full flex flex-col background ">
      <h1 className="bg-white rounded-md text-4xl font-bold inline-block m-5 p-4 text-center">RANDOM GIFS</h1>
      <div className="flex flex-col gap-y-8 items-center p-10 ">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
