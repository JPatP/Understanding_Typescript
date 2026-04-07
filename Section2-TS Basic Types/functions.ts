function add(a: number, b: number): number {
    return a + b;
    // we added a return value type for this function, so it will return a number. If we try to return something else, TypeScript will give us an error.
    // if you hover over the function name, you will see that it returns the type.
}

function logMessage(message: string): void {
    console.log(message);
    // this function does not return anything, so we use the void type.
}

function logAndThrow(message: string): never {
    console.log(message);
    throw new Error(message);
    // this function never returns, it always throws an error, so we use the never type. 
    // /This function will never complete successfully, it will always throw an error.
}


// Functions are also values, you can store it as a value in a variable, pass it as an argument to another function, or return it from a function.
function performJob(cb: () => void)   {
    console.log("Performing job...");
    cb
}
// 
