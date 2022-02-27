import React from 'react';
import SlotM from './SlotM';

const App = () =>{
  return(
    <>
    <h1 className='heading'>🎰 Welcome Yameen to <span style={{fontWeight: 'bold'}}>Our Slot Machine Game</span></h1>
     <div className='slotMachine'>
      <SlotM x = '👍' y= '👍' z = '👍'/>
      <hr />
      <SlotM x = '👎' y = '👎' z = '👍'/>
      <SlotM  x = '🐈' y = '🐱' z ='🐈'/>
      <SlotM  x = '🍎' y = '🍎' z = '🍎'/>
     </div>
    </>
  )
}


export default App;