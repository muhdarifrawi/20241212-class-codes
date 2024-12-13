// console.log("\n\tHello");

// console.log("She said, \"I hope it wouldn\'t rain\" to David");

let exampleString = `Dear Abbey,
    How have you beeen.
    
Lately it has been raining. Hope you are okay.

    Take care.
    
Best Regards,
Louie
`

// console.log(exampleString);

let greeting = "HELLO THERE!"
console.log(`Original string value:`);
console.log(greeting);
console.log(`\nGetting character with index:`);
console.log(greeting[4]);
console.log(`\nChecking length of string:`);
console.log(greeting.length);

console.log(`\nSlicing string using two values`);
let slicedGreeting = greeting.slice(0,5);
console.log(`Result:`);
console.log(slicedGreeting);

console.log(`\nSlicing using one value`);
console.log(`Result:`);
console.log(greeting.slice(4));
console.log(`\nSlicing using one negative value:`);
console.log(`Result:`);
console.log(greeting.slice(-6));

console.log(`\nTo lowercase:`);
console.log(greeting.toLowerCase());

console.log(`\nUppercase and Trim`);
let username = "    RotiPrataTelur ";
console.log(`\nOriginal:`);
console.log(username);
console.log(`\nUppercased and trimmed:`);
console.log(username.toUpperCase().trim());

let longPhrase = "The quick brown fox jumps over the lazy dog";
console.log(`\nOriginal long phrase:`);
console.log(longPhrase);
console.log(`\nSplit via space:`);
console.log(longPhrase.split(" "));
console.log(`\nSplit via letter o:`);
console.log(longPhrase.split("o"));

console.log(`\nNote: .includes() is case sensitive`);
console.log(`\nSearch for 'Fox':`);
console.log(longPhrase.includes("Fox"));
console.log(`\nSearch for 'fox'`);
console.log(longPhrase.includes("fox"));
console.log(`\nFind index of 'fox'`);
console.log(longPhrase.indexOf("fox"));