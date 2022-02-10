import React from "react";
import {useState} from 'react';


function ComponentUseEffectProduct(){
    const [ count, setCount] = useState(0)
    
    //let count = 0 // este es un estado
    const handlerClick=()=>{
        setCount(count+1)
    }
        
    return (
        <div>
            
            <p>Cuantos desea comprar</p>
            <p>{count}</p>
            <button onClick={handlerClick}>Click +</button>
            <button onClick={handlerClick}>Click -</button>
        </div>
    );

}

export default ComponentUseEffectProduct

