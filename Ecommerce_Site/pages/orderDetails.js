import React, { useContext } from 'react';
import { CartContext } from '../components/Layout';

export default function OrderDetails() {
  const{orderList,selectedOrder} = useContext(CartContext);
  // console.log(selectedOrder);
  // const [order, setOrder] = useState({});
  if(orderList.length === 0 ) return;
  let orderr;
  return (
    <>
    <div className='container'>
      {orderList.map( (order)=>{if(order.invoice === selectedOrder){
          // setOrder(order);
          orderr = order;
      }})}
      {/* {console.log("hey i am here order details", orderr.invoice)} */}
      <div className="personInfo">
          <h2>Personal Information: </h2>
          <p><span>Name: </span>{orderr.name}</p>
          <p><span>Email: </span>{orderr.email}</p>
          <p><span>phone: </span>{orderr.phone}</p>
          <p><span>address: </span>{orderr.address}</p>
      </div>
      <div className="itemInfo">
        <h2>Items Information:</h2>
        {orderr.item.map( (eachItem)=>
          <div className="itemContainer" key = {eachItem.id}>
            <div className="product-img">
              <img src={eachItem.img} alt="iamge" />
            </div>

            <div className="title">
              <p> {eachItem.title}</p>
            </div>

            <div className="quantity">
              <p><span>Quantiy: </span> {eachItem.quantity}</p>
            </div>

            <div className="totalAmount">
              <p><span>Price: </span> {eachItem.quantity*eachItem.price} Taka</p>
            </div>
          </div>
        
        )}
          

          <div className="totalPrice">
            <p><span>Total Price: </span> {orderr.totalAmount} Taka</p>
          </div>
      </div>
    </div>
    <style jsx>{`
      .container{
        margin-left: 50px;
      }
      .personInfo{
        background: linear-gradient(
          103.49deg,
          #ffffff -28.13%,
          rgba(242, 247, 255, 0.5) 116.84%
        );
        box-shadow: rgba(0, 0, 0, 0.08) 0rem 0.4rem 1.2rem;
        border-radius: 2rem;
        padding-left: 10px;
        margin-bottom: 50px;
        padding-bottom: 10px;
      }
      .personInfo span{
        color: red;
        font-size: 20px;
        font-weight: bold;
      }
      .itemContainer{
        width: 100%;
        height: 8rem;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        background: linear-gradient(
          103.49deg,
          #ffffff -28.13%,
          rgba(242, 247, 255, 0.5) 116.84%
        );
        box-shadow: rgba(0, 0, 0, 0.08) 0rem 0.4rem 1.2rem;
        border-radius: 2rem;
        padding-left: 10px;
        margin-bottom: 10px;
        padding-bottom: 10px;
      }
      .product-img img{
        width: 13rem;
        height: 8rem;
        filter: drop-shadow(0rem 0.4rem 1rem #f1f7ff);
        border-radius: 1rem;
      }
      .title p{
        color: red;
        font-size: 20px;
        font-weight: bold;
      }
      .quantity span{
        color: red;
        font-size: 20px;
        font-weight: bold;
      }
      .totalAmount span{
        color: red;
        font-size: 20px;
        font-weight: bold;
      }
      .totalPrice{
        text-align: right;
        padding-right: 10rem;
      }
      .totalPrice span{
        color: red;
        font-size: 20px;
        font-weight: bold;
      }
    `}</style>
    </>
  )
}
