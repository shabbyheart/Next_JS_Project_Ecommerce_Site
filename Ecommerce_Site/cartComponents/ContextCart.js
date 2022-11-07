import { useRouter } from 'next/router';
import React, { useContext } from "react";
//import { CartContext } from "../pages/cart";
import Link from "next/link";
import { CartContext } from "../components/Layout";
import Items from "./Items";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
  const router = useRouter();
  const checkout = ()=>{
    if(totalItem === 0){
      alert("You did not add any product to cart");
    }
    else{
      router.push('/orderForm');
    }
  }

  // if (item.length === 0) {
  //   return (
  //     <>
  //       <header>
  //         <div className="continue-shopping">
  //           <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
  //           <h3>continue shopping</h3>
  //         </div>

  //         <div className="cart-icon">
  //           <img src="./images/cart.png" alt="cart" />
  //           <p>{totalItem}</p>
  //         </div>
  //       </header>

  //       <section className="main-cart-section">
  //         <h1>shopping Cart</h1>
  //         <p className="total-items">
  //           you have <span className="total-items-count">{totalItem} </span>{" "}
  //           items in shopping cart
  //         </p>
  //       </section>
  //     </>
  //   );
  // }

  return (
    <>
      <header>
        <Link href="/"><a>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3> 
        </div>
        </a></Link>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
              {item.map((curItem) => {
                 return <Items key={curItem.id} {...curItem} />;
              })}
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}Taka</span>
          </h3>
          <button onClick={checkout}>checkout</button>
          {/* <Link href="/orderForm"><a>
              <button>checkout</button>
          </a></Link> */}
          
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Mulish;
        }
        
        html {
          font-size: 55.5%;
        }
        :root {
          --main-color: #333;
          --primary-color: #acacac;
          --icon-color: #525252;
        }
  
        
        header {
          width: 100%;
          line-height: 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 0.1rem solid #9a9191;
          transform: rotate(-0.05deg);
          margin-bottom: 1rem;
        }
        
        .continue-shopping {
          display: flex;
          height: inherit;
          align-items: center;
        }
        
        .continue-shopping .arrow-icon {
          width: 2.2rem;
          height: 2.2rem;
        }
        
        .continue-shopping h3 {
          font-size: 2rem;
          text-transform: capitalize;
          color: var(--main-color);
          margin-left: 1.5rem;
          font-weight: 400;
        }

        .main-cart-section{
          width: 90%;
          margin: auto;
        }
        .main-cart-section h1 {
          font-style: normal;
          
          font-weight: bold;
          font-size: 2rem;
          text-transform: capitalize;
          color: rgba(41, 41, 41, 1);
          margin-bottom: 1rem;
        }
        
        .main-cart-section .total-items {
          font-style: normal;
          font-weight: normal;
          font-size: 1.8rem;
          text-transform: capitalize;
          color: var(--main-color);
          margin-bottom: 2rem;
        }
        
        .total-items-count {
          font-weight: bold;
          color: red;
        }
        
        /* cart main div start  */
        
        .main-cart-section .cart-items {
          width: 90%;
          
          background: linear-gradient(
            103.49deg,
            #ffffff -28.13%,
            rgba(242, 247, 255, 0.5) 116.84%
          );
          box-shadow: rgba(0, 0, 0, 0.08) 0rem 0.4rem 1.2rem;
          border-radius: 2rem;
          margin: auto;
          display: grid;
          place-items: center;
        }
        
        .cart-items hr {
          margin: 2rem auto;
          
        }
        
        .cart-items-container {
          width: 80%;
         
        }

        .card-total {
          width: 95%;
          margin-top: 1rem;
          margin-bottom: 5rem;
          text-align: right;
        }
        
        .card-total h3 {
          font-style: 200;
          font-size: 2.58rem;
          line-height: 1.5rem;
          text-transform: capitalize;
          color: #606166;
        }
        
        .card-total h3 span {
          font-style: normal;
          font-weight: bold;
          font-size: 2.8rem;
          line-height: 3.2rem;
          text-transform: capitalize;
          color: #000000;
          margin-left: 1rem;
        }
        
        .card-total button {
          border: none;
          font-size: 1.6rem;
          padding: 1rem 3rem;
          color: #fff;
          background-color: #349bf3;
          text-transform: uppercase;
          margin-top: 1rem;
          border-radius: 0.5rem;
          cursor: pointer;
          letter-spacing: 1px;
        }
        
        /* hover effects  */
        .fa-trash-alt {
          color: #ed4848;
        }
        
        .fa-plus:hover {
          color: #42c157;
        }
        
        .fa-minus:hover {
          color: #ffb800;
        }
        
        .fa-plus,
        .fa-minus {
          color: var(--icon-color);
        }
        
        .card-total button:hover {
          background-color: #0077dc;
        }
        
        .card-total .clear-cart {
          margin-left: 3rem;
          background-color: rgb(209, 61, 61);
        }
        
        .card-total .clear-cart:hover {
          background-color: rgb(197, 5, 5);
        }
        
        /* responsive media queries  */
        
        @media (max-width: 968px) {
          html {
            font-size: 50%;
          }
        }
        
        @media (max-width: 768px) {
          .continue-shopping h3 {
            margin-left: 0;
            font-size: 1.85rem;
          }
        
          .items-info {
            width: 100%;
            height: auto;
            display: grid;
            grid-template-columns: 1fr;
          }
        
          .title,
          .add-minus-quantity,
          .price,
          .remove-item {
            padding-left: 2rem;
          }
        
          .items-info .product-img {
            width: 100%;
            text-align: center;
            margin-bottom: 2rem;
          }
        
          .add-minus-quantity {
            margin: 2rem 0 2rem 0;
            justify-content: flex-start;
          }
        
          .price {
            justify-content: flex-start;
            margin-bottom: 2rem;
          }
        
          .price h3::before {
            content: "Price: ";
          }
        
          .remove-item {
            justify-content: flex-start;
          }
        
          .card-total {
            margin-bottom: 2rem;
            text-align: center;
          }
        
          .card-total button {
            margin-bottom: 3rem;
          }
        }
        
      `}</style>
    </>
  );
};

export default ContextCart;
