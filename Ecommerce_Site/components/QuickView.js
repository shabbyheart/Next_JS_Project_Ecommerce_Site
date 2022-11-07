import Image from 'next/image';
import Link from 'next/link';
//import styles from '../styles/QuickView.module.css';

export default function QuickView({open,product,onClose}) {
    if(!open) return null;
  return (
    <div className="overlay" onClick={ onClose}>
        <div className="modalContainer">
            <div className='modalLeft'>
                <p onClick={onClose} className='closeBtn'>X</p>
            </div>
            <div className='Datacontainer' onClick={ (e)=> e.stopPropagation()}>
                <div >
                    
                    <Image src = {product.img} alt='Image' width="300px" height="200px"></Image>
                </div>
                <div >
                    
                    <div className="content">
                        <h3>Price: {product.price}</h3>
                        <h3>{product.title}</h3>
                        <p><span>Description: </span>  {product.description}</p>
                        <Link href={`/productDetails/${product.id}`}>
                            <a><button>More Details</button> </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
        <style jsx>{`
            .overlay{
                position: fixed; /* Stay in place */
                z-index: 1; /* Sit on top */
                padding-top: 100px; /* Location of the box */
                left: 0px;
                top: 0px;
                width: 100%; /* Full width */
                height: 100%; /* Full height */
                overflow: auto; /* Enable scroll if needed */
                background-color: rgb(0,0,0); /* Fallback color */
                background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            }
            .modalContainer{
                background-color: #fefefe;
                margin: auto;
                padding: 20px;
                border: 1px solid #888;
                width: 80%;
            }
            .modalLeft{
                position: fixed;
                margin: 0px;
                padding: 0px;
            }
            .Datacontainer{
                display: grid;
                grid-template-columns: repeat(auto-fit,minmax(400px,200px));
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
            .closeBtn{
                top: 0px;
                left: 0px;
                color: red;
                justify-self: left;
            }
        `}
        </style>
    </div>
  )
}
