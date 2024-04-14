function addition(callback,a,b){
    let result= a+b;
    callback(result);
}

function displayAdditon(result){
    console.log(result);
}

addition(displayAdditon,3,5);