import './index.css';
import { BoltMarketMap } from "./map/map";


export default function App() {
  return (
    <h1 className="flex flex-col items-center justify-center w-full h-screen">
      <BoltMarketMap />
      <h1 className='text-xl font-bold'>Tips:</h1>
      <p><strong className='text-green-400'>Green</strong>: 2km radius</p>
      <p><strong className='text-amber-500'>Orange</strong>: 5km radius</p>
      <p><strong className='text-red-600'>Red</strong>: 10km radius</p>
    </h1>
  )
}
