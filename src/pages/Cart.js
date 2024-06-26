import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { remove } from '../Redux/CartSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems =  useSelector(state=>state.cart)
    const [totalProduct,setTotalProduct] = useState(0);
  

    useEffect(()=>{
        let total = 0;
      for(let x in cartItems){
            total = cartItems[x].price+total;
      }
          setTotalProduct(total)
    },[cartItems])

    const handleRem = (id)=>{
        console.log(id)
        const k =  dispatch(remove(id));
        // console.log(k)

    }
  return (
    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'4rem'}}>
        {
        totalProduct ? (<div style={{display:'flex',flexDirection:'column',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'4rem'}} >
             { cartItems?.map(item=>{
                return(  <div key={item.id} style={{display:'flex',justifyContent:'space-around',width:'80%',height:'auto',border:'1px solid black',padding:'10px',borderRadius:'20px 0px 20px 0px'}} >
                    
                    <img src={item.image} alt='image' width={200} style={{aspectRatio:'1/1',height:'auto',}} />
                    <h4 >{item.title}</h4>
                      <h5>{item.price}</h5>
                      <button onClick={()=>{handleRem(item.id)}} style={{padding:'10px',borderRadius:'5px',border:'none',backgroundColor:'white'}}>Remove</button>
                     </div>)
            })
        }
       <div style={{position:'sticky',bottom:'0px',padding:'2px',backgroundColor:'teal',width:'100vw',marginTop:'1rem'}}>
          <p>Total price :{totalProduct}</p>
          <button style={{padding:'10px',borderRadius:'5px',border:'none',backgroundColor:'white'}}>Check out</button>
        </div>
        </div>
        ):(<div>Add Something to cart</div>)
        
        }
      
        
    </div>
  )
}

export default Cart
