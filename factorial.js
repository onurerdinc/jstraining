function factorial (n){
 if (n === 1 || n === 0)
 return 1;

  else 
  return factorial(n-1)* n  
 
}
console.log(factorial(8));


//n * n-1

// f(4) = f(3)* 4 // f(3)= f(2)*3 // f(2)= f(1)*2