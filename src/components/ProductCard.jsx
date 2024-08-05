import { React } from "react";

const ProductCard = (props) => {
    const product =  props.item
    return(
        <div>
        <div className="w-100">
          <img className='product-img' src={product.image} alt="" />
          <h3 style={{marginBottom: 10}}>{product.name}</h3>
          <p style={{marginBottom: 10}}>{product.title}</p>
          <p style={{marginBottom: 10}}>{product.prise}$</p>
          <p style={{marginBottom: 20}}>{product.count}</p>
          <button className='cart-btn'>Add cart</button>
        </div>
        </div>
    )
}
export default ProductCard