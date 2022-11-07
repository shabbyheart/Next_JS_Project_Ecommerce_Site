import { useRouter } from 'next/router';
import React, { createContext, useContext, useState } from 'react';
import { CartContext } from '../components/Layout';
export const OrderFormContext = createContext();

// const initialSate = {
//     invoice: "",
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     item: [],
//     totalAmount: 0,
//     totalItem: 0,
// };
// const reducer = (state,action)=>{
//     //console.log(action.payload.name);
//     if(action.type === "addOrder"){
//         //console.log("keno je hosce na");
//         return{
//             ...state,
//             invoice: "OF1234",
//             name: action.payload.name,
//             email: action.payload.email,
//             phone: action.payload.phone,
//             address: action.payload.address,
//             item: action.payload.item,
//             totalAmount: action.payload.totalAmount,
//             totalItem: action.payload.totalItem,
//         }
//     }
//     return state;
// }

export default function OrderForm() {
    const {item,totalAmount,totalItem,addOrderList} = useContext(CartContext);

    // const [state, dispatch] = useReducer(reducer,initialSate);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [orderList, setOrderList] = useState([]);
    const router = useRouter();

    const invoice = "OF"+totalItem+Math.floor(Math.random() * 100)+Math.floor(Math.random() * 1000);
    const submitForm = (e)=>{
        e.preventDefault();
        // dispatch({
        //     type: "addOrder",
        //     payload: {name,email,phone,address,item,totalAmount,totalItem},
        // })
        const date = new Date();
        const dateTime = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate()+"  "+date.getHours()+":"+date.getMinutes();
        const ss = {
            invoice: invoice,
            date: dateTime,
            name,
            email,
            phone,
            address: address,
            item: item,
            totalAmount: totalAmount,
            totalItem: totalItem,
        }
        //setOrderList([...orderList,ss])
        //console.log(orderList);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        addOrderList(ss);
        router.push('/myOrder');
    }
  return (
    <>
    <div className='container'>
        <div className= "productListContainer">
            <h3>Item List: </h3>
            {item.map((curItem) => 
            <div key={curItem.id} className="product">
                <div><h2>{curItem.title}</h2></div>
                <div><h3>Quantity: {curItem.quantity}</h3></div>
                <div><h3>Price: {curItem.price*curItem.quantity}</h3></div>
                <hr />
            </div>
            )}
        </div>
        <div className='formContainer'>
            <form action="/myOrder" onSubmit={submitForm}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" autoComplete='off' 
                        value={name}
                        onChange={ e=> setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" autoComplete='off'
                        value={email}
                        onChange={ e=> setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name="phone" id="phone" autoComplete='off' 
                        value={phone}
                        onChange={ e=> setPhone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" autoComplete='off'
                        value={address}
                        onChange={ e=> setAddress(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" >Place Order</button>
            </form>
        </div>
    </div>
    <style jsx>{`
        .container{
          width: 90%;
          height: 30rem;
          background: linear-gradient(
            103.49deg,
            #ffffff -28.13%,
            rgba(242, 247, 255, 0.5) 116.84%
          );
          box-shadow: rgba(0, 0, 0, 0.08) 0rem 0.4rem 1.2rem;
          border-radius: 2rem;
          margin: auto;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit,400px);
          grid-template-rows: repeat(1,1fr);
          grid-gap: 2px;
          justify-content: center;
          place-items: center;
        }
        .productListContainer{
            width: 100%;
        }
        .product{
            width: 100%;
            height: 6rem;
            /* background-color: lavender; */
            margin: auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr; 
        }
        .formContainer{  
        }
        input{
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        button{
            width: 100%;
            background-color: #4CAF50;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        .product hr {
            margin: 2rem auto;
            
        }
    `}</style>
    </>
  )
}
