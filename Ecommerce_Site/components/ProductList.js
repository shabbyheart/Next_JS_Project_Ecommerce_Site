import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import QuickView from './QuickView';
export default function ProductList({ posts }) {
  const [products, setProducts] = useState([]);
  const [openModel, setOpenModel] = useState(false);
  const [productState,setProductState] = useState({});
  //console.log(posts);
  if(products.length === 0){
    fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  }

  //setProductState(data);
  const handler = (event,product)=>{
    setOpenModel(true);
    setProductState(product);
  }

  return (
    <>
    <div className="container">{
      products.map( product => 
        <div key={product.id} className="element"> 
          <Link href = {`/productDetails/${product.id}`} >
            <a>
              <div  >
                <div>
                  <Image src ={product.img} alt='Image' width="250px" height="150px"></Image>
                </div>
                {product.title}
                <p>Price: {product.price}</p>
              </div>
            </a>
          </Link>
          <div>
            <button onClick={ event => handler(event,product)}>Quick View</button>
          </div>
        </div>)   
    }
    </div>
    <QuickView open={openModel} product={productState} onClose={() => setOpenModel(false)}/>
    <style jsx>{`
      .container{
        height: 100%;
        color: rgb(248, 248, 248);
        display: grid;
        
        grid-template-columns: repeat(auto-fit,300px);
        grid-template-rows: repeat(2,1fr);
        grid-auto-rows: 1fr;
        grid-gap: 10px;
        justify-content: center;
      }
      .element{
      
          background: #231878;
          box-shadow: 2px 4px 4px rgb(70, 60, 216);
          border-radius: 5px;
          margin: 10px;
          padding: 10px;
      }
    `}</style>
    </>
  )
}


export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}