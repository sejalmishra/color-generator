import React, {useState} from 'react';
import Values from 'values.js';
import SingleColor from './singlecolor';

function App() {
  const [error, setError] = useState(false);
  const [list,setList] = useState(new Values('#f15025').all(10));
  const [color, setColor] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    try{
    const newColor = new Values(color).all(10);
    setList(newColor);
    console.log(newColor);
    }
    catch(error){
      setError(true);
      console.log(error);
    }
    
  }
  return (
    <>
      <section className='container'>
       <h3>Color Generated</h3>
          <form onSubmit={handelSubmit}>
            <input type='text'  value={color} onChange={(e) => {setColor(e.target.value)}} placeholder='#f15025' className={`${error ? 'error' : null}`}/>
            <button type='submit' className='btn'>Submit</button>
          </form>
        </section>
        <section className='colors'>
          {list.map((item, index) => {
              return(
                <SingleColor key={index} {...item} index={index} toHex={item.hex}/>
              );
          })} 
          </section>
      </>
  );
}

export default App;
