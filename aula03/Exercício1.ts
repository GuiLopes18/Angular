let num: number;


for (num = 1; num <= 200; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("divisível por 3 e 5");
    }
    else if (num % 3 === 0) {
        console.log("divisível por 3");
    }
    else if (num % 5 === 0) {
        console.log("divisível por 5");
    }
    else {
        console.log(num);
    }
}
