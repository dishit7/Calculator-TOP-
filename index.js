let  var1,var2,result;
var1=var2=result="0";
let operator="null";
function add(localvar1,localvar2) {
result=parseFloat(var1) +parseFloat(var2);
console.log( "var1 is"+ var1+"result is"+result+"var2 is"+ var2);
var2=0;
var1="0"; 
operator="null";
console.log( "var1 is"+var1+"result is"+result+"var2 is"+var2+"operator is"+operator);
return result;
}
function subtract(localvar1,localvar2) {
    result=var1 -var2;
    var2=0;
    var1="0";
    operator="null";
    console.log(var1+result+var2);
    return result;
    }

function  multiplication(localvar1,localvar2) {
        result=var1 *var2;
        var2=0;
        var1="0";
        operator="null";
        console.log(var1+result+var2);
        return result;
        }
        
function   division(localvar1,localvar2) {
            result=var1 /var2;
            var2=0;
            var1="0";
            operator="null";
            console.log(var1+result+var2);
            return result;
            }       

function calculator(num1,num2,operator){
    switch (operator){
        case '+':
         return  add(var1,var2);
        break;

        case '-':
         return subtract(var1,var2);
        break;

        case '*':
         return  multiplication(var1,var2);
        break;

        case '/':
         return division(var1,var2);
        break;

    }
          
    }
/*
for(var i=0;i<document.querySelectorAll(".number").length;i++){
   // console.log(document.querySelectorAll(".number")[i]);
    document.querySelectorAll(".number")[i].addEventListener("click",function(){
        if (var1==0){
            var1=this.innerHTML;
            console.log(var1);
        }
        else{
            var2=0;
            var2 = this.innerHTML;
            console.log("var2 is:"+var2 );
        }
    })
}
*/

for(var i=0;i<document.querySelectorAll(".number").length;i++){
    document.querySelectorAll(".number")[i].addEventListener("click",function(){
        if(operator==="null"){
            var1=var1+this.innerHTML;
            document.getElementById("result").innerHTML=parseFloat(var1);
            console.log(var1);
        }
        else{
            var2=var2+this.innerHTML;
            document.getElementById("result").innerHTML=parseFloat(var2);
            console.log(var2);
        }

})
}
    
for(var i=0;i<document.querySelectorAll(".Operator").length;i++){
    document.querySelectorAll(".Operator")[i].addEventListener("click",function(){
     if (var2==0  && this.innerHTML!= "=" && var1!="0"){
        operator=this.innerHTML;
        console.log(var2+operator);
      //  var2=var1;
     }
     else if(this.innerHTML!= "="  && operator!="null"){
        document.getElementById("result").innerHTML=calculator(var1,var2,operator);
        operator=this.innerHTML;
     }
      else if(this.innerHTML!= "="  && var1==="0"){
                var1=result;
                operator=this.innerHTML;
      }
     else{
    
        
        if(this.innerHTML==="=" && var2!=0){
            //operator=operator;
            
        document.getElementById("result").innerHTML=calculator(var1,var2,operator);
            console.log(operator);
        }
     
     else if(this.innerHTML==="=" && var2==0 && operator!="null"){
        
        var2=var1;
        document.getElementById("result").innerHTML=calculator(var1,var2,operator);
        console.log(operator);  
     }
     else if(var1==0 && this.innerHTML=="-")
     {
        var1="-"+parseFloat(var1);

     }
     else{
        result=result;
     }
    }
})
}

document.getElementById("AC").addEventListener("click",function(){
    var1=var2=result="0";
    document.getElementById("result").innerHTML=parseFloat(var1);
    operator="null";  
})

document.getElementById("Signer").addEventListener("click",function(){
  if(operator==="null"){
    var1=result;
    var1=(-1)*var1;
    document.getElementById("result").innerHTML=parseFloat(var1);
    }
    else{
          var2=(-1)*var2;
    document.getElementById("result").innerHTML=parseFloat(var2);
}
}
)
/*
document.getElementById("point").addEventListener("click",function(){
    if(operator===null){
        var1=var1+".";

    }
    else{
         var2=var2+".";
    }
}) ;

*/
