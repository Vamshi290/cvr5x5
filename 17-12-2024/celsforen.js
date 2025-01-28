function isCelsius(n1){
    let res=(1.8)*n1+32
    return res
}
function isFarenheit(n1){
    let res=(n1-32)*(5/9)
    return res   
}
function result(){
    let n1=parseFloat(document.getElementById("num1").value)
    let opt=document.getElementById("op").value
    if(opt=="Celsius to Farenheit"){
        console.log(isCelsius(n1))
    }
    else{
        console.log(isFarenheit(n1))
    }
}