import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { CartContext } from '../components/Layout';

export default function MyOrder() {
  const{orderList,setSelectedOrder} = useContext(CartContext);
  const router = useRouter();
  const viewDetails = (invoice)=>{
    setSelectedOrder(invoice);
    router.push('/orderDetails');
  }

  return (
    <>
    <div>
      <h1>My Order</h1>
    </div>
    <div className='container'>
      {orderList.map( (order)=>
        // <Link href="/orderDetails"><a>
          <div className="eachOrder" key={order.invoice}>
            <div><p>Invoice: {order.invoice}</p></div>
            <div><p>DateTime: {order.date}</p></div>
            <div className='viewButton'>
              <button onClick={()=>viewDetails(order.invoice)}>View Details</button>
            </div>
            
          </div>
        // </a></Link>
      )}
      
      
      {/* {orderList.map((order)=> <div>
        <Link href="/orderDetails"><a>
          <div><h2>InvoiceNumber:{order.invoice}</h2></div>
          <div><h2>TotalAmount:{order.totalAmount}</h2></div>
        </a></Link>
      </div>
      )} */}
    </div>
    <style jsx>{`
      .container{
      }
      .eachOrder{
        width: 80%;
        background: linear-gradient(
          103.49deg,
          #ffffff -28.13%,
          rgba(242, 247, 255, 0.5) 116.84%
        );
        box-shadow: rgba(0, 0, 0, 0.08) 0rem 0.4rem 1.2rem;
        border-radius: 2rem;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
        grid-template-rows: repeat(1,1fr);
        grid-gap: 2px;
        justify-content: center;
        margin-bottom: 10px;
        padding-left: 50px;
      }
      .viewButton{
        display: flex;
        flex-direction: row-reverse;
      }
      .eachOrder button{
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
      .eachOrder button:hover{
        background-color: #4CAF50;
        color: white;
      }
    `}</style>
    </>
  )
}
