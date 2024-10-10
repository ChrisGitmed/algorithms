const solution = (a) => {
  // let smallestDifference = Infinity;
  // const result = a.reduce((answerElement, currentElement) => {
  //     const totalDifference = a.reduce((accum, curr) => {
  //         return accum + Math.abs(curr - currentElement);
  //     }, 0)
      
  //     if (totalDifference < smallestDifference) {
  //         smallestDifference = totalDifference;
  //         return answerElement = currentElement;
  //     }
  //     return answerElement;
  // }, null);
  // return result;
  
  let b,c=Infinity;a.forEach(g=>{let d=a.reduce((e,f)=>e+Math.abs(f-g),0);if(d<c){c=d;b=g}});return b;
}
