function calculate(n1,n2,op){
    let res
    switch(op){
        case 'add':res=n1+n2
        break;
        case 'sub':res=n1-n2
        break
        case 'mul':res=n1*n2
        break
        case 'div':if(n2==0){
            res="error : division by zero"
            }
            else{
                res=n1/n2
            }
            break
        default:
            res="error : invalid operator"
    }
    return res;
}
function calc(){
let n1=parseFloat(document.getElementById("num1").value)
let n2=parseFloat(document.getElementById("num2").value)  
let op=document.getElementById("operation").value
if(isNaN(n1) || isNaN(n2)){
    console.log("Please enter valid inputs")
    return
}
let result=calculate(n1,n2,op)  
console.log("result is : "+result)
}

console.log("TEST")