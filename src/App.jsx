import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import Body from './components/Body'
import About from './components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Error from './components/Error'
import Cart from './components/Cart'
import RestaurantMenu from './components/RestaurantMenu'
import ItemsHeader from './components/ItemsHeader'
import Pizza from './components/CategoryPage'
import CategoryPage from './components/CategoryPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
       <ItemsHeader/>
        {/* <Body /> */}
        <Routes>
          <Route path='/' element={<Body />}  />
          <Route path='/ItemsHeader'  element={ <ItemsHeader/>}/>
          <Route path='/restaurant/:resId' element={<RestaurantMenu/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/*' element={<Error/>}/>
          <Route path='/cart'element={<Cart/>}/>
          <Route path='/Pizza' element={<Pizza/>}/>
          <Route path="/category/:name" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
