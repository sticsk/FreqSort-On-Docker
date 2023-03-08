import React from 'react'



const num = 12.300000000000;
const removeTrailingZeroes = Number.parseFloat(num);
console.log(removeTrailingZeroes) //12.3


const Test2 = () => {
  return (
    <div>{removeTrailingZeroes}</div>
  )
}

export default Test2