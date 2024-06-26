import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../Redux/CartSlice';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };
    fetchData();
  }, []);

  const addHandler = (product) => {
    const s = dispatch(addCart(product));
    console.log(s);
  };

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div style={{ display: 'flex',flexDirection:'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4rem', marginTop: '5rem', marginBottom: '5rem' }}>
      <div style={{display:'flex',flexShrink:'10px'}}>
      <input 
        type='text' 
        placeholder='Search products...' 
        onChange={(e) => setInput(e.target.value)} 
        value={input}
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid gray' }}
      />
      </div>
     <div style={{display:'flex',gap:'2rem', flexWrap:'wrap', justifyContent:'center',alignItems:'center', width:'screen',margin:'0 auto'}}>
     {
        filteredProducts.map((item) => (
          <div key={item.id} style={{ width: '200px', height: 'auto', border: '1px solid black', padding: '10px', borderRadius: '20px 0px 20px 0px' }}>
            <img src={item.image} alt='product' width={200} style={{ aspectRatio: '1/1', height: 'auto' }} />
            <h4>{item.title.slice(0,10)}</h4>
            <h5>${item.price}</h5>
            <button 
              style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: 'teal', color: 'white', cursor: 'pointer' }} 
              onClick={() => addHandler(item)}
            >
              Add to cart
            </button>
          </div>
        ))
      }
     </div>
     
    </div>
  );
}

export default Home;

