import React, { useContext } from 'react'
import { UserContext } from './Usercontext'


function Home() {

    const {value , setValue} = useContext(UserContext);
  const handleminusclick=()=>{
    return setValue(value-1);
    }
    const handleaddclick=()=>{
        return setValue(value+1);
        }

  return (
    <>
    <div> hello Home</div>
    <br></br>
    <br></br>

    <button onClick={handleminusclick}>-</button>
    <p>{value}</p>
    <button onClick={handleaddclick}>+</button>

    </>
  )
}

export default Home