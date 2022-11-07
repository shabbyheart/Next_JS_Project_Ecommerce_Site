import Link from 'next/link';
import React, { useContext } from 'react';
import { CartContext } from './Layout';
export default function Header() {
  const {totalItem} = useContext(CartContext);
  return (
    <div className='container'>
      {/* {console.log("omar")} */}
      <div >
        <Link href={`/`}><a >
            <div className='continueHome'>
            <img className='img' src="/home.jpg" alt="img" />
              <h3>Home</h3>
            </div>
        </a></Link>
      </div>
      <div className='searchBar'></div>
      <div className='icon'>
        <Link href = "/cart"><a>
          <div className='logoCart'>
            <img className='img' src="/cart.png" alt="img" />
            <p>{totalItem}</p>
            </div>
        </a></Link>
        <Link href = "/myOrder"><a>
          <div className='logoMyOrder'>
            <img className='img' src="/myorder.png" alt="img" />
          </div>
        </a></Link>
      </div>
      <style jsx>{`
        .container{
            width: 100%;
            height: 5rem;
            background:  rgb(73, 140, 190);    
            display: grid;
            grid-template-columns: repeat(3,1fr);
            grid-templet-rows: repeat(1,1fr);
            grid-gap:5px;
        }
        .continueHome{
          display: flex;
          height: inherit;
          align-items: center;
        }
        .continueHome img{
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          color: #2f80ed;
        }
        .continueHome h3{
          font-size: 1.5rem;
          text-transform: capitalize;
          color: #333;
          margin-left: 1.5rem;
          font-weight: 1000;
        }
        
        .icon{
          display: flex;
          text-align: end;
          margin-right: 2rem;
          align-items: center;
          position: relative;
          justify-content: flex-end;
        }
        .logoCart{
          display: flex;
          text-align: end;
          margin-right: 2rem;
          align-items: center;
          position: relative;
          justify-content: flex-end;
        }
        .logoCart img{
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          color: #2f80ed;
        }
        .logoCart p{
          position: absolute;
          width: 2rem;
          height: 2rem;
          right: -1.2rem;
          top: 0.2rem;
          border-radius: 50%;
          background: red;
          color: white;
          box-sizing: border-box;
          font-size: 1.6rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logoMyOrder img{
            border-radius: 50%;
            width: 4rem;
            height: 4rem;
        }
        
      `}
      </style>
      
    </div>
  )
}
