// Initialize variables
let r=50;
let q=100;
let m=procedure1(r,q);

// Check if product is greater than 1000 and sets c to either 1 or 2 depending on the result
function procedure1(f, n){
    let c = f * n;
    if (c > 1000){
        c = 1;
        console.log("Number multiplied product is greater than 1000");
    }else{
        c = 2;
        console.log("Number multiplied product is less than 1000");
    }
    console.log(c);
    return c;
}

// Add two numbers together and returns value
function procedure2(z, p){
    let x = z + p;
    return x;
}

// Divide two numbers from procedure 4 and return result
function procedure3(l, o){
    let k = l/o;
    return k;
}

// Multiply numbers, divide by 5, check if result is even or odd
function procedure4(a, b) {
    let d = a * b;
    let u =procedure3(d, 5);
    if (u % 2 == 0){
        console.log("The result is even");
    }else{
        console.log("The result is odd");
    }
    return u;
}

// Checks if sum of m and q is <= 50
let st=procedure2(m,q);
if (st <=50){
    console.log("The sum is less than of equal to 50");
    console.log(st);
}else{
    console.log("The sum is greater than 50");
    console.log(st);
}

// Calculate final result by multiplying r and q, then diving by 5, and finally to check if the result is even of odd
let s=procedure4(r,q);
console.log(s);
