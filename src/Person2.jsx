import React from 'react'
import Uc from './Uc'

function Person2({money , handleincrease}) {
  return (
    <>
    <h1>Dashu is Offring : ${money}</h1>
    <button onClick={handleincrease}>Click here to increase</button>
    </>
  )
}

export default Uc(Person2)