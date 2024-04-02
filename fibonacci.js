function fibonacci_sequence(n) {
   if(n==0){
    return 0;
   }
   else if(n==1){
    return 1;
   }
   else{
    return fibonacci_sequence(n-2) + fibonacci_sequence(n-1);
   }
}

let n=10;
for (let i=0; i<n; i++){
    console.log(fibonacci_sequence(i)+ "");
}