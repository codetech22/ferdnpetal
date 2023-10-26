import React from 'react'
import {IoMdStarHalf} from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const Teddy = () => {
  return (
    <div className='p-1'>
    <div class="flex gap-5 font-semibold text-lg  border shadow-sm rounded-xl p-4 md:p-5 bg-red-200 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
    Teddy Bear   
    <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-pink-500 text-white ">4.6<IoMdStarHalf/></span> 
    <span className='text-slate-300 font-bold'>|</span>
    <span className='text-slate-600 text-lg'>8 of 10</span>
</div>

{/* <!-- Card Blog --> */}
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-3 mx-auto bg-yellow-100 rounded-lg mt-1 ">
{/* <!-- Title --> */}
{/* <!-- End Title --> */}

{/* <!-- Grid --> */}
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* <!-- Card --> */}
 <NavLink to={"/teddy1"}> <a class="group flex flex-col h-full border-2 border-yellow-600-2 border-gray-200 border-yellow-600 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://m.media-amazon.com/images/I/61Z5IRQDB8S._AC_UL320_.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
        Cute Teddy with Brownville Dark Chocolet
      </h3>
      <div className='flex justify-between mt-2'>
     <div className='flex gap-5 '><span className='font-semibold'>Rs.799</span> <span className='line-through'>Rs.949</span> <span className='text-green-700 font-semibold'>28% OFFER</span></div>
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
<NavLink to={"/teddy2"}>  <a class="group flex flex-col h-full border-2 border-gray-200 border-yellow-600 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://www.fnp.com/images/pr/l/v20230918165949/cute-teddy-with-small-cadbury-celebrations-box_1.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
        Teddy and Treats Hamper
      </h3>
      <div className='flex justify-between mt-2'>
     <div className='flex gap-5 '><span className='font-semibold'>Rs.799</span> <span className='line-through'>Rs.1299</span> <span className='text-green-700 font-semibold'>17% OFFER</span></div>
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
<NavLink to={"/teddy3"}>  <a class="group flex flex-col h-full border-2 border-gray-200 border-yellow-600 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://m.media-amazon.com/images/I/61fGPpCT3WL._AC_UL320_.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
        Dairy Milk Chocolet with Red and White Teddy
      </h3>
      <div className='flex justify-between mt-2'>
     <div className='flex gap-5 '><span className='font-semibold'>Rs.899</span> <span className='line-through'>Rs.1249</span> <span className='text-green-700 font-semibold'>12% OFFER</span></div>
     <div><span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-sm text-xs font-medium bg-pink-500 text-white ">4.6<IoMdStarHalf/></span> </div>
      </div>
      <div className='flex justify-between mt-4'>
      <div className='text-xs text-gray-600 font-semibold'>Earliest Deliver: <span className='font-bold text-slate-600'>Today</span></div>
      <div><p className='text-slate-400 font-bold text-sm'>231 REVIEWS</p></div>
      </div>
    </div>
  </a> </NavLink>
  {/* <!-- End Card --> */}
<NavLink to={"/teddy4"}>  <a class="group flex flex-col h-full border-2 border-gray-200 border-yellow-600 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://m.media-amazon.com/images/I/41Wej4ly4-L._AC_UL320_.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
        Appealing Love Teddy Bear
      </h3>
      <div className='flex justify-between mt-2'>
     <div className='flex gap-5 '><span className='font-semibold'>Rs.449</span> <span className='line-through'>Rs.899</span> <span className='text-green-700 font-semibold'>21% OFFER</span></div>
     <div><span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-sm text-xs font-medium bg-pink-500 text-white ">4.6<IoMdStarHalf/></span> </div>
      </div>
      <div className='flex justify-between mt-4'>
      <div className='text-xs text-gray-600 font-semibold'>Earliest Deliver: <span className='font-bold text-slate-600'>Today</span></div>
      <div><p className='text-slate-400 font-bold text-sm'>133 REVIEWS</p></div>
      </div>
    </div>
  </a>
  </NavLink>

<NavLink to={"/teddy5"}>  <a class="group flex flex-col h-full border-2 border-gray-200 border-yellow-600 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://m.media-amazon.com/images/I/41rag2i7-dL._AC_UL320_.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
        Teddy Heart Box
      </h3>
      <div className='flex justify-between mt-2'>
     <div className='flex gap-5 '><span className='font-semibold'>Rs.1249</span> <span className='line-through'>Rs.1849</span> <span className='text-green-700 font-semibold'>12% OFFER</span></div>
     <div><span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-sm text-xs font-medium bg-pink-500 text-white ">5.0<IoMdStarHalf/></span> </div>
      </div>
      <div className='flex justify-between mt-4'>
      <div className='text-xs text-gray-600 font-semibold'>Earliest Deliver: <span className='font-bold text-slate-600'>Today</span></div>
      <div><p className='text-slate-400 font-bold text-sm'>28 REVIEWS</p></div>
      </div>
    </div>
  </a> </NavLink>

 <NavLink to={"/teddy6"}> <a class="group flex flex-col h-full border-2 border-gray-200 border-yellow-600 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://m.media-amazon.com/images/I/91pLO5XNGML._AC_UL320_.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
       Basket of Joy and Chocolets
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

<NavLink to={"/teddy7"}>  <a class="group flex flex-col h-full border-2 border-gray-200 border-yellow-600 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://m.media-amazon.com/images/I/819am0Qh+yL._AC_UL320_.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
       Sweet n Chubby Love Hamper
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

 <NavLink to={"/teddy8"}> <a class="group flex flex-col h-full border-2 border-gray-200 border-yellow-600 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] " href="#">
    <div class="aspect-w-16 aspect-h-11">
      <img class="w-96 object-cover rounded-xl" src="https://www.fnp.com/images/pr/l/v20230413132202/bunch-of-6-red-roses-teddy-bear-combo_1.jpg" alt="Image Description"/>
    </div>
    <div class="my-1">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
       Plus Love Garden
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

export default Teddy
