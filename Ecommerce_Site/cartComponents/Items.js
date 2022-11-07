import React, { useContext } from "react";
//import { CartContext } from "../pages/cart";
import { CartContext } from "../components/Layout";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
        </div>

        <div className="add-minus-quantity">
          <button  onClick={() => decrement(id)}>-</button>
          <input type="text" placeholder={quantity} disabled />
          <button  onClick={() => increment(id)}>+</button>
        </div>

        <div className="price">
          <h3>{price} Taka</h3>
        </div>

        <div className="remove-item">
          <button
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}>Delete</button>
        </div>
      </div>

      <hr />
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

        
        .items-info {
          width: 100%;
         
          /* background-color: lavender; */
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
        .items-info .product-img{
          padding-top: 3rem;
        }
        .items-info .product-img img {
          width: 13rem;
          height: 8rem;
          filter: drop-shadow(0rem 0.4rem 1rem #f1f7ff);
          border-radius: 1rem;
        }
        
        .items-info .title {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        
        .items-info .title h2 {
          font-style: normal;
          font-weight: bold;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          text-transform: capitalize;
          color: var(--main-color);
        }
        .add-minus-quantity {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        
        .add-minus-quantity button {
          border: none;
          background-color: transparent;
          outline: none;
          cursor: pointer;
        }
        
        .add-minus-quantity input {
          width: 2rem;
          height: 3rem;
          border: 0.141rem solid var(--primary-color);
          box-sizing: border-box;
          font-style: normal;
          font-weight: normal;
          font-size: 1.3rem;
          text-align: center;
          text-transform: capitalize;
          color: var(--primary-color);
          margin: 0 1rem;
          border-radius: 0.5rem;
          outline: none;
          background-color: transparent;
        }
        
        .add-minus-quantity input:focus {
          outline: none;
        }
        
        .price {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        
        .price h3 {
          font-style: normal;
          font-weight: bold;
          font-size: 1.3rem;
          text-transform: capitalize;
          color: var(--main-color);
        }
        
        .remove-item {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-right: 5rem;
        }
        
        .remove-item button {
          border: none;
          background-color: transparent;
          cursor: pointer;
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

export default Items;
