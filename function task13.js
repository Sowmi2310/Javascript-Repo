function finddaysinmonth(){
     var month=2;
     var year=2012;
    
     if( month==2 && year%4==0 )
        console.log("The month has 29 days")
     else if(month==2 && year%4!=0 )
      console.log("The month has 28 days")
     else if(month==4 || month==6 || month==9 || month==11)
     console.log("The month has 30 days")
     else
        console.log("The month has 31 days")
    
     }
 finddaysinmonth()