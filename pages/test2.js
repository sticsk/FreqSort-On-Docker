import React from 'react'

 const Test4 = () => {

  function calculateCircuits(traffic, desiredBlockingProb) {
    let N = 1; // initial value for number of circuits
    let Pb = 1; // initial value for blocking probability
  
    while (Pb > desiredBlockingProb) {
      Pb = erlangB(traffic, N);
      N++;
    }
  
    return N - 1; // return the last value of N that produced a blocking probability less than or equal to the desired value
  }
  
  function erlangB(A, N) {
    let sum = 0;
    for (let i = 0; i <= N; i++) {
      sum += Math.pow(A, i) / factorial(i);
    }
    return Math.pow(A, N) / (factorial(N) * sum);
  }
  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  let x=calculateCircuits(10,0.01)
  
  console.log(x)


  return (
    <div>test2</div>
  )
}
export default Test4;
