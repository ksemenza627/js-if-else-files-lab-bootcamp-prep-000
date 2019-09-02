var index = require("./index.js")
var other_file = require("./other_file.js")

console.log(index.name);
console.log(index.height);

if (index.name === "Joe") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+index.name)
}



if (index.height === 74) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
