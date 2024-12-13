const prompt = require("prompt-sync")();

let filename = prompt("Enter filename:");

let extensionName = filename.slice(-3);
if(extensionName == "jpg" || extensionName == "png"){
    console.log("file is an image");
}
else{
    console.log("file not an image");
}