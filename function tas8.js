function tri(){
    var side1=6;
    var side2=6;
    var side3=16;
    if(side1 == side2 == side3){
    console.log("Equilateral Triangle")
}
  else if(side1 == side2 && side3){
    console.log("Isosceles triangle")
  }
  else{
    console.log("Scalene Triangle")
  }
}
tri()