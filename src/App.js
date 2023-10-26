import React, { Suspense,lazy } from 'react'
import Dashboard from './Layout/Dashboard'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'
import Choco1 from './ChocoletNavs/Choco1'
import Choco2 from './ChocoletNavs/Choco2'
import Choco3 from './ChocoletNavs/Choco3'
import Choco4 from './ChocoletNavs/Choco4'
import Choco5 from './ChocoletNavs/Choco5'
import Choco6 from './ChocoletNavs/Choco6'
import Choco7 from './ChocoletNavs/Choco7'
import Choco8 from './ChocoletNavs/Choco8'
import Gift from './Component/Gift'
import Teddy from './Component/Teddy'
import Gift1 from './GiftNavs/Gift1'
import Teddy1 from './TeddyNavs/Teddy1'
import Gift2 from './GiftNavs/Gift2'
import Gift3 from './GiftNavs/Gift3'
import Gift4 from './GiftNavs/Gift4'
import Gift5 from './GiftNavs/Gift5'
import Gift6 from './GiftNavs/Gift6'
import Gift7 from './GiftNavs/Gift7'
import Gift8 from './GiftNavs/Gift8'
import Teddy2 from './TeddyNavs/Teddy2'
import Teddy3 from './TeddyNavs/Teddy3'
import Teddy4 from './TeddyNavs/Teddy4'
import Teddy5 from './TeddyNavs/Teddy5'
import Teddy6 from './TeddyNavs/Teddy6'
import Teddy7 from './TeddyNavs/Teddy7'
import Teddy8 from './TeddyNavs/Teddy8'




const Home = lazy(()=>import("./Component/Home"))
const choco1 = lazy(()=>import("./ChocoletNavs/Choco1"))
const choco2 = lazy(()=>import("./ChocoletNavs/Choco2"))
const choco3 = lazy(()=>import("./ChocoletNavs/Choco3"))
const choco4 = lazy(()=>import("./ChocoletNavs/Choco4"))
const choco5 = lazy(()=>import("./ChocoletNavs/Choco5"))
const choco6 = lazy(()=>import("./ChocoletNavs/Choco6"))
const choco7 = lazy(()=>import("./ChocoletNavs/Choco7"))
const choco8 = lazy(()=>import("./ChocoletNavs/Choco8"))

const gift = lazy(()=>import("./Component/Gift"))
const gift1 = lazy(()=>import("./GiftNavs/Gift1"))
const gift2 = lazy(()=>import("./GiftNavs/Gift2"))
const gift3 = lazy(()=>import("./GiftNavs/Gift3"))
const gift4 = lazy(()=>import("./GiftNavs/Gift4"))
const gift5 = lazy(()=>import("./GiftNavs/Gift5"))
const gift6 = lazy(()=>import("./GiftNavs/Gift6"))
const gift7 = lazy(()=>import("./GiftNavs/Gift7"))
const gift8 = lazy(()=>import("./GiftNavs/Gift8"))
const teddy = lazy(()=>import("./Component/Teddy"))
const teddy1 = lazy(()=>import("./TeddyNavs/Teddy1"))
const teddy2 = lazy(()=>import("./TeddyNavs/Teddy2"))
const teddy3 = lazy(()=>import("./TeddyNavs/Teddy3"))
const teddy4 = lazy(()=>import("./TeddyNavs/Teddy4"))
const teddy5 = lazy(()=>import("./TeddyNavs/Teddy5"))
const teddy6 = lazy(()=>import("./TeddyNavs/Teddy6"))
const teddy7 = lazy(()=>import("./TeddyNavs/Teddy7"))
const teddy8 = lazy(()=>import("./TeddyNavs/Teddy8"))
const App = () => {
  return (
    <div>
      {/* <h1 className='text-3xl font-bold text-blue-600'>Hello</h1> */}
      {/* <Dashboard/> */}
      <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path='/' element={<Dashboard/>}>
            <Route path='Home' element={<Home/>}/>
            <Route path='choco1' element={<Choco1/>}/>
            <Route path='choco2' element={<Choco2/>}/>
            <Route path='choco3' element={<Choco3/>}/>
            <Route path='choco4' element={<Choco4/>}/>
            <Route path='choco5' element={<Choco5/>}/>
            <Route path='choco6' element={<Choco6/>}/>
            <Route path='choco7' element={<Choco7/>}/>
            <Route path='choco8' element={<Choco8/>}/>
            <Route path='gift' element={<Gift/>}/>
            <Route path='gift1' element={<Gift1/>}/>
            <Route path='gift2' element={<Gift2/>}/>
            <Route path='gift3' element={<Gift3/>}/>
            <Route path='gift4' element={<Gift4/>}/>
            <Route path='gift5' element={<Gift5/>}/>
            <Route path='gift6' element={<Gift6/>}/>
            <Route path='gift7' element={<Gift7/>}/>
            <Route path='gift8' element={<Gift8/>}/>
            <Route path='teddy' element={<Teddy/>}/>
            <Route path='teddy1' element={<Teddy1/>}/>
            <Route path='teddy2' element={<Teddy2/>}/>
            <Route path='teddy3' element={<Teddy2/>}/>
            <Route path='teddy4' element={<Teddy3/>}/>
            <Route path='teddy5' element={<Teddy4/>}/>
            <Route path='teddy6' element={<Teddy5/>}/>
            <Route path='teddy7' element={<Teddy6/>}/>
            <Route path='teddy8' element={<Teddy7/>}/>
            <Route path='teddy8' element={<Teddy8/>}/>
          </Route>
        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
