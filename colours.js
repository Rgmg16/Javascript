let colours=["red","green","pink","yellow","purple","blue"];
console.log(colours[1]);

colours.push("grey");
console.log(colours);
colours.shift();
console.log(colours);
console.log(colours.reverse());
console.log(colours.sort());
console.log(colours.length);

for(let c=0;c<colours.length;c++){
    console.log(colours[c]);
}
colours.pop();
console.log(colours);

string1= colours.toString();
console.log(string1);
