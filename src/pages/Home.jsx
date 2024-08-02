import { useEffect, useState } from 'react'
import { Products } from '../utils/data'
import ProductCard from '../components/ProductCard';

const  Home =() =>  {
  const [products, setProducts] = useState([]);
  const [priseFilter, setPriseFilter] = useState("")
  const [filterItems, setFilterItems] = useState([])
  useEffect(()=>{
    setProducts(Products) 
    if (priseFilter === "") {
      setFilterItems(Products)
    } else{
      const filtered = Products.filter(
        (item) => item.prise == priseFilter
      );
      setFilterItems(filtered)
    }
  },[priseFilter])


  return (
    
    <div className='home'>
      <h1>Our Products</h1>
    <div className="filter">
    <input onChange={(e) => setPriseFilter(e.target.value)}
     type="text" />
    </div>
      <div className="products">
        {filterItems.length>0?<>
          {filterItems.map((item, index) => (
          <div className="card" key={index}>
           <ProductCard item={item}/>
          </div>
      ))}  
        </>:<p>No Any product with this prise</p>}
        
      </div>
    </div>
  )
  

}

export default Home
