import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from "../../components/Layout";

function ProductDetails({ product }) {
  const { addCart } = useContext(CartContext);

    return (
      <>
      <div className="container">
        <div>
        <Image src = {product.img} alt='Image' width="300px" height="200px"></Image>
        </div>
        <div className='content'>
          <h3>Price: {product.price}</h3>
          <h3>{product.title}</h3>
          <p><span> Description: </span> {product.description}</p>
          <button onClick={()=> addCart(product)}>Add to cart</button>
        </div>
      </div>
      <style jsx>{`
        .container{
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(auto-fit,400px);
          grid-template-rows: repeat(1,1fr);
          grid-gap: 2px;
          justify-content: center;
      }
      .content button{
        background-color: white; 
        color: black; 
        border: 2px solid #4CAF50;
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
      }
      .content button:hover{
        background-color: #4CAF50;
        color: white;
      }
      .content p span{
        font-size: 20px;
        font-weight: bold;
      }
      `}</style>
      </>
    )
  }
  
  export async function getServerSideProps(contex) {
    const res = await fetch(`http://localhost:3000/api/products/${contex.params.productId}`)
    const product = await res.json()
    return {
      props: {
        product,
      },
    }
  }
  
  export default ProductDetails