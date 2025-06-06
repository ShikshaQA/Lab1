function functionA() {
    function functionB() {
        console.log("This is an original function.");
    }
    return functionB;   // return the function itself, not calling it here
}

let myFunction = functionA();  // get functionB assigned to myFunction

myFunction();   // call functionB, output will be: This is an original function.
