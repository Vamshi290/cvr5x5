function total(...arr){
    return arr.reduce((sum, b) => sum + b, 0);
}
console.log(total(10, 20, 30, 40))