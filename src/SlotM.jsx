import React from 'react';

const SlotM = (props) =>{
 
    // let x = '😄';
    // let y = '😄';
    // let z = '🧛';
  
    let {x, y, z} = props; // object destructuring
  
    if(props.x===props.y && props.y===props.z){
      return(
        <>
        <div className='div_inner'>
        <h1>{x} {y} {z}</h1>
        <h1>This is Matching</h1>
        <hr />
        </div>
        </>
      )
    }else{
      return(
        <>
        <div className='div_inner'>
        <h1>{x} {y} {z}</h1>
        <h1>This is not Matching</h1>
        <hr />
        </div>
        </>
      )
    }
   
  }

  export default SlotM;