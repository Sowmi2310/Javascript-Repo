function evalnumbers(){
    var num1=3;
    var num2=2;
    var equal=1
    if(num1+num2==equal){
        console.log("Add")
    }
    else if(num1-num2==equal){
        console.log("Subtract")
    }
    else if((num1*num2==equal)){
        console.log("multiply")
    }
    else if((num1/num2==equal)){
        console.log("divide")
    }
    else if((num1%num2==equal)){
        console.log("modulus")
    }
    else{
        console.log("Invalid operation")
    }
    


     
}
evalnumbers()