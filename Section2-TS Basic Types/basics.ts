let userName: string;
let age = 39;

userName = "Alice";

function add(a: number, b: number, c = 5){
    console.log( a + b + c);
}

add(3, 5);