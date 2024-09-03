function square(n){
    return n *n;
  }
  
  function cube(n){
    return n * n * n;
  }
  
  function sumofSomething(a,b,callback){
    val1 = callback(a);
    val2 = callback(b);
  
    return val1 + val2;
  }
  
  
  const ans =sumofSomething(2,2,square)
  console.log(ans)
  
  const ans1 = sumofSomething(2,2,cube)
  console.log(ans1)