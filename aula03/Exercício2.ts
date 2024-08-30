function primo(num: number): boolean {
    if (num <= 1 ){
        return false;
    }
    else {
        let divisor: number = 2;


        while (divisor < num) {
            if (num % divisor === 0){
                return false;
            }
            else {
                divisor++
            }
        }
        return true;
    }
}


for (let i = 1; i <= 50; i++) {
    if (primo(i)) {
        console.log(i)
    }
}
