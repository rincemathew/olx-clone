import olxSymbol from '../assets/olx-symbol.svg'
import lens from '../assets/lens.svg'
import arrow from '../assets/down-arrow.svg'
import search from '../assets/search.svg'

function Navbar() {
  return (
    <div className='flex p-4'>
      <img src={olxSymbol} className='w-11 h-9'></img>
      <div className='flex border border-spacing-1 w-64 p-2 border-black ml-5'>
        <img src={lens} className='w=6 h-5 mt-1' alt="" />
        <input placeholder='Location' className='ml-3'></input>
        <img src={arrow} className='w-8 h-7' alt="" />
      </div>
      <div className='flex h-12 ml-4 border border-black'>
       <input placeholder='Find Cars, Mobile phones and more' className='ml-3 w-96'></input>
       <img src={search}></img>
      </div>
      <div className='flex h-12 p-3 ml-10 cursor-pointer'>
        <h1 className='font-semibold'>ENGLISH</h1>
        <img src={arrow} className='w-8 h-7'></img>
      </div>
      <div className='flex h-12 p-3 ml-10 cursor-pointer underline hover:no-underline'>
        <h1 className='font-bold text-lg'>Login</h1>
      </div>
      <div className='w-28 flex h-12 p-2 ml-10 cursor-pointer rounded-full border border-yellow-500'>
        <h1 className='font-bold text-lg ml-3'>+ SELL</h1>
      </div>
    </div>
  )
}

export default Navbar