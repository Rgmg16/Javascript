function groupBy(array, property){
    return array.reduce((result, currentItem)=>{
(result[currentItem[property]] = result[currentItem[property]]||[]).push(
    currentItem
);
return result;
    },{});
}

let array = [
    {name:"George", age:20,city: "Nairobi"},
    {name:"Sheila", age: 22, city: "Kisumu"},
    {name: "Bernard", age: 21, city:"Nairobi"},
    {name: "Zoey", age:25, city:"Kisumu"},
];

console.log(groupBy(array,"city"));