let number = -6;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

//Switch Statement
let day = 4;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
}

//For Loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//While Loop
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

//Do...While Loop
let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

//Break Statement
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Stops the loop when it reaches 3
    }
    console.log("Break example:", i);
}

//Continue Statement
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("Continue example:", i);
}

//Scope Example
let globalVar = "I'm global!";

function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar);
    console.log(localVar);
}

scopeExample();

console.log(globalVar); 