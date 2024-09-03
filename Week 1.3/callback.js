//callback

function square(n){
    return n * n;
  }
  function cube(n){
    return n*n*n;
  }
  function sumofSquare(a,b){
    const val1 = square(a);
    const val2 = square(b);
  
    return val1 + val2;
  }
  
  function sumofCube(a,b){
    const val1 = cube(a);
    const val2 = cube(b)
    return val1 + val2;
  }
  
  const ans = sumofSquare(2,3)
  
  const ans1 = sumofCube(2,3)
  
  console.log(ans) 
  
  console.log(ans1)