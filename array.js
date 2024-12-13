let randomArr = [2,4,6,8,10,12];

console.log(`\nSlicing an array with a single value:`);
console.log(randomArr.slice(4));
console.log(`\nSlicing an array with negative value:`);
console.log(randomArr.slice(-4));

console.log(`\nPushing new value into array`);
randomArr.push(14);
randomArr.push(16);
console.log(`Result:`);
console.log(randomArr);
console.log(`\nRemoving one value from array`);
randomArr.pop();
console.log(`Result:`);
console.log(randomArr);
console.log(`\nReverse order of array`);
randomArr.reverse();
console.log(`Result:`);
console.log(randomArr);

console.log(`\nIterating an array:`);
for(let x of randomArr){
    console.log(x);
}

console.log(`\nDesctructuring an array:`);
let [a,b,c,d,e,f,g] = randomArr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
