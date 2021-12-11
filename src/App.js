import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Home/Home'
import Product from './components/Shop/Product'
import Shop from './components/Shop/Shop'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
        
      <Route path="shop" element={<Shop/>}/>
      <Route path="product/:id" element={<Product/>}/>

      <Route path="dashboard" element={<Dashboard/>}/>
        
    </Routes>
    </>
  )
}

export default App
