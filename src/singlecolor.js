import React, {useState,useEffect} from 'react';

const SingleColor= ({rgb, weight, toHex, index}) => {
    const [alert, setAlert] = useState(false);
    const value = `#${toHex}`;
    const rbc = rgb.join(',');
    useEffect(() => {
        const timeout = setTimeout(() => {
          setAlert(false);
        }, 3000)
        return () => clearTimeout(timeout);
    }, [alert])
    return (
        <article className={`color ${index > 10 && 'color-light'}`}
         style={{background: `rgb(${rbc})`}}
         onClick={() => {
             setAlert(true);
             navigator.clipboard.writeText(value)
         }}>
         <p className='percent-value'>{weight}%</p>
         <p className='color-value'>#{toHex}</p>
         {alert? <p className='alert'>COPIED TO CLIPBOARD</p> : null}
        </article>
    )
}

export default SingleColor;