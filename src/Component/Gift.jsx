import React from 'react'
import {IoMdStarHalf} from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const Gift = () => {
  return (
    <div className='p-1 '>
    <div class="flex gap-5 font-semibold text-lg  border shadow-sm rounded-xl p-4 md:p-5 bg-pink-200 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
    Memorable Birthday Gifts   
    <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-pink-500 text-white ">4.4<IoMdStarHalf/></span> 
    <span className='text-slate-300 font-bold'>|</span>
    <span className='text-slate-600 text-lg'>8 of 10</span>
</div>

{/* <!-- Card Blog --> */}
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-3 mx-auto bg-slate-200 rounded-lg mt-1 ">
{/* <!-- Title --> */}
{/* <!-- End Title --> */}

{/* <!-- Grid --> */}
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* <!-- Card --> */}
 <NavLink to={"/gift1"}> <a class="group flex flex-col h-full border-2 border-slate-400-2 border-slate-600 border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://m.media-amazon.com/images/I/81Chb2YBJPS._AC_UL320_.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
        Love for pastel cornations Bouquet
      </h3>
      <div className='flex justify-between mt-2'>
     <div className='flex gap-5 '><span className='font-semibold'>Rs.699</span> <span className='line-through'>Rs.749</span> <span className='text-green-700 font-semibold'>28% OFFER</span></div>
     <div><span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-sm text-xs font-medium bg-pink-500 text-white ">4.8<IoMdStarHalf/></span> </div>
      </div>
      <div className='flex justify-between mt-4'>
      <div className='text-xs text-gray-600 font-semibold'>Earliest Deliver: <span className='font-bold text-slate-600'>Today</span></div>
      <div><p className='text-slate-400 font-bold text-sm'>273 REVIEWS</p></div>
      </div>
    </div>
  </a> </NavLink>
  {/* <!-- End Card --> */}

  {/* <!-- Card --> */}
<NavLink to={"/gift2"}>  <a class="group flex flex-col h-full border-2 border-slate-600 border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://m.media-amazon.com/images/I/61wKmXHDeyL._AC_UL320_.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
        Fudge Brownie cake Half kg Eggless
      </h3>
      <div className='flex justify-between mt-2'>
     <div className='flex gap-5 '><span className='font-semibold'>Rs.499</span> <span className='line-through'>Rs.799</span> <span className='text-green-700 font-semibold'>17% OFFER</span></div>
     <div><span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-sm text-xs font-medium bg-pink-500 text-white ">5.0<IoMdStarHalf/></span> </div>
      </div>
      <div className='flex justify-between mt-4'>
      <div className='text-xs text-gray-600 font-semibold'>Earliest Deliver: <span className='font-bold text-slate-600'>Today</span></div>
      <div><p className='text-slate-400 font-bold text-sm'>28 REVIEWS</p></div>
      </div>
    </div>
  </a> </NavLink>
  {/* <!-- End Card --> */}

  {/* <!-- Card --> */}
<NavLink to={"/gift3"}>  <a class="group flex flex-col h-full border-2 border-slate-600 border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://m.media-amazon.com/images/I/51+nBAnqLDL._AC_UL320_.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
        Personalised grace pink Rose
      </h3>
      <div className='flex justify-between mt-2'>
     <div className='flex gap-5 '><span className='font-semibold'>Rs.199</span> <span className='line-through'>Rs.249</span> <span className='text-green-700 font-semibold'>12% OFFER</span></div>
     <div><span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-sm text-xs font-medium bg-pink-500 text-white ">4.6<IoMdStarHalf/></span> </div>
      </div>
      <div className='flex justify-between mt-4'>
      <div className='text-xs text-gray-600 font-semibold'>Earliest Deliver: <span className='font-bold text-slate-600'>Today</span></div>
      <div><p className='text-slate-400 font-bold text-sm'>231 REVIEWS</p></div>
      </div>
    </div>
  </a> </NavLink>
  {/* <!-- End Card --> */}
<NavLink to={"/gift4"}>  <a class="group flex flex-col h-full border-2 border-slate-600 border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://m.media-amazon.com/images/I/51yyq18f45L._AC_UL320_.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
        Sweet Memories pink Roses
      </h3>
      <div className='flex justify-between mt-2'>
     <div className='flex gap-5 '><span className='font-semibold'>Rs.649</span> <span className='line-through'>Rs.899</span> <span className='text-green-700 font-semibold'>21% OFFER</span></div>
     <div><span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-sm text-xs font-medium bg-pink-500 text-white ">4.6<IoMdStarHalf/></span> </div>
      </div>
      <div className='flex justify-between mt-4'>
      <div className='text-xs text-gray-600 font-semibold'>Earliest Deliver: <span className='font-bold text-slate-600'>Today</span></div>
      <div><p className='text-slate-400 font-bold text-sm'>133 REVIEWS</p></div>
      </div>
    </div>
  </a>
  </NavLink>

<NavLink to={"/gift5"}>  <a class="group flex flex-col h-full border-2 border-slate-600 border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://m.media-amazon.com/images/I/61jQ7tNCS9L._AC_UL320_.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
        Sip of love birthday Mug-Hand Delivary
      </h3>
      <div className='flex justify-between mt-2'>
     <div className='flex gap-5 '><span className='font-semibold'>Rs.249</span> <span className='line-through'>Rs.349</span> <span className='text-green-700 font-semibold'>12% OFFER</span></div>
     <div><span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-sm text-xs font-medium bg-pink-500 text-white ">5.0<IoMdStarHalf/></span> </div>
      </div>
      <div className='flex justify-between mt-4'>
      <div className='text-xs text-gray-600 font-semibold'>Earliest Deliver: <span className='font-bold text-slate-600'>Today</span></div>
      <div><p className='text-slate-400 font-bold text-sm'>28 REVIEWS</p></div>
      </div>
    </div>
  </a> </NavLink>

 <NavLink to={"/gift6"}> <a class="group flex flex-col h-full border-2 border-slate-600 border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://m.media-amazon.com/images/I/518myxKNKWL._AC_UL320_.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
       Sunkissed Roses Libra Personalised Mug
      </h3>
      <div className='flex justify-between mt-2'>
     <div className='flex gap-5 '><span className='font-semibold'>Rs.1699</span> <span className='line-through'>Rs.2099</span> <span className='text-green-700 font-semibold'>19% OFFER</span></div>
     <div><span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-sm text-xs font-medium bg-pink-500 text-white ">4.9<IoMdStarHalf/></span> </div>
      </div>
      <div className='flex justify-between mt-4'>
      <div className='text-xs text-gray-600 font-semibold'>Earliest Deliver: <span className='font-bold text-slate-600'>Today</span></div>
      <div><p className='text-slate-400 font-bold text-sm'>883 REVIEWS</p></div>
      </div>
    </div>
  </a></NavLink>

<NavLink to={"/gift7"}>  <a class="group flex flex-col h-full border-2 border-slate-600 border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://m.media-amazon.com/images/I/817eNxS57wL._AC_UL320_.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
       Blissfull Love Roses Arrangement
      </h3>
      <div className='flex justify-between mt-2'>
     <div className='flex gap-5 '><span className='font-semibold'>Rs.1049</span> <span className='line-through'>Rs.1399</span> <span className='text-green-700 font-semibold'>25% OFFER</span></div>
     <div><span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-sm text-xs font-medium bg-pink-500 text-white ">5.0<IoMdStarHalf/></span> </div>
      </div>
      <div className='flex justify-between mt-4'>
      <div className='text-xs text-gray-600 font-semibold'>Earliest Deliver: <span className='font-bold text-slate-600'>Today</span></div>
      <div><p className='text-slate-400 font-bold text-sm'>193 REVIEWS</p></div>
      </div>
    </div>
  </a> </NavLink>

 <NavLink to={"/gift8"}> <a class="group flex flex-col h-full border-2 border-slate-600 border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://m.media-amazon.com/images/I/61w8RM7cAsL._AC_UL320_.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
       Birthday Special Syngonium Plant
      </h3>
      <div className='flex justify-between mt-2'>
     <div className='flex gap-5 '><span className='font-semibold'>Rs.1149</span> <span className='line-through'>Rs.1299</span> <span className='text-green-700 font-semibold'>12% OFFER</span></div>
     <div><span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-sm text-xs font-medium bg-pink-500 text-white ">5.0<IoMdStarHalf/></span> </div>
      </div>
      <div className='flex justify-between mt-4'>
      <div className='text-xs text-gray-600 font-semibold'>Earliest Deliver: <span className='font-bold text-slate-600'>Today</span></div>
      <div><p className='text-slate-400 font-bold text-sm'>55 REVIEWS</p></div>
      </div>
    </div>
  </a> </NavLink>
</div>
{/* <!-- End Grid --> */}

{/* <!-- Card --> */}

{/* <!-- End Card --> */}
</div>
{/* <!-- End Card Blog --> */}
  </div>
  )
}

export default Gift
