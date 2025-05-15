
/* Q1 
var x = Number(window.prompt("Enter your number"));
console.log(x);
*/

/* Q2 
var x = Number(window.prompt("Enter your number"));
if(x%3==0 && x%4==0){
    console.log("yes");
}
else{
    console.log('no');
}
*/

/* Q3 
var num1 = Number(window.prompt("Enter your number 1"));
var num2 = Number(window.prompt("Enter your number 2"));
if(num1>num2){
    console.log("Max Value: " + num1);
    
}
else{
        console.log("Max Value: " + num2);
}
*/

/* Q4
var num1 = Number(window.prompt("Enter your number"));
if (num1>0){
    console.log(num1 + " is Positive");
    
}
else{
    
    console.log(num1 + " is Negative");
}
 */

/* Q5
var num1 = Number(window.prompt("Enter your number 1"));
var num2 = Number(window.prompt("Enter your number 2"));
var num3 = Number(window.prompt("Enter your number 2"));

var max = num1;
var min = num1;

// Find maximum using if conditions
if(num2>max){
    max = num2
}
if(num3>max){
    max = num3
}

// Find minimum using if conditions
if (num2 < min) {
    min = num2;
}
if (num3 < min) {
    min = num3;
}

console.log("Maximum element is: " + max);
console.log("Minimum element is: " + min);
 */

/* Q6 & 7 
var num1 = Number(window.prompt("Enter your number"));
if(num1%2==0){
    console.log(num1 + " Is even");
}
else{
    console.log(num1 + " Is odd");
}
*/

/* Q8
var charac = window.prompt("Enter Character");
if(charac=='a' || charac=='e'||charac=='i'|| charac=='o'|| charac=='u' || charac=='A'|| charac=='E'|| charac=='I'|| charac=='O'|| charac=='U'){
    console.log(charac+ " Is vowel");
}
else{
    console.log(charac+ " Is consonant");
}
*/

/* Q9 
var num1 = Number(window.prompt("Enter your number"));
for(var i=1; num1>=i ;i++){
    console.log(i);
}
*/

/* Q10
var num1 = Number(window.prompt("Enter your number"));
for (var i=1; i<=12 ;i++){
    console.log(num1+" * "+i+" = "+num1*i );
}
*/

/* Q11
var num1 = Number(window.prompt("Enter your number"));
for (i=1 ; i<num1 ;i++){
    if(i%2==0){
        console.log(i);
    }
}
*/

/* Q12 -1
var num1 = Number(window.prompt("Enter number 1"));
var num2 = Number(window.prompt("Enter number 2"));
var res =1;
for(i=1 ; i<=num2 ; i++){
    res*= num1;
}
console.log(num1+'^'+ num2 +" = " + res);
*/

/* Q12 -2
var num1 = Number(window.prompt("Enter number 1"));
var num2 = Number(window.prompt("Enter number 2"));
var num3 = Number(window.prompt("Enter number 3"));
var num4 = Number(window.prompt("Enter number 4"));
var num5 = Number(window.prompt("Enter number 5"));

console.log("Total Marks = " +(num1 + num2 + num3 + num4 + num5 ) );
console.log("Average Marks = " + ( (num1+num2+num3+num4+num5) / 5 ) );
console.log("Percentage = " + ( (num1+num2+num3+num4+num5) / 5 ) + "%" );
*/

/* Q13 
var num1 = Number(window.prompt("Enter month number"));
if (num1==1 ||num1==3 ||num1==5 ||num1==7 ||num1==8 ||num1==10 ||num1==12 ){
    console.log("Days in months: 31 days") ;
}
else if(num1==4 ||num1==6 ||num1==9 ||num1==11){
    console.log("Days in months: 30 days") ;
}
else if(num1==2){
    console.log("Days in months: 28 days") ;
}
else{
    console.log("Invalid month number") ;
}
*/

/* Q14 
var num1 = Number(window.prompt("Enter Physics mark"));
var num2 = Number(window.prompt("Enter Chemistry mark"));
var num3 = Number(window.prompt("Enter Biology mark"));
var num4 = Number(window.prompt("Enter Mathematics mark"));
var num5 = Number(window.prompt("Enter Computer mark"));

if (num1<=100 &&  num2<=100 && num3<=100 && num4<=100 && num5<=100 )
{
    if(((num1+num2+num3+num4+num5)/5) >= 90){
        console.log("Grad: A");
    }
    else if(((num1+num2+num3+num4+num5)/5) >= 80){
        console.log("Grad: B");
    }
    else if(((num1+num2+num3+num4+num5)/5) >= 70){
        console.log("Grad: C");
    }
    else if(((num1+num2+num3+num4+num5)/5) >= 60){
        console.log("Grad: D");
    }
    else if(((num1+num2+num3+num4+num5)/5) >= 40){
        console.log("Grad: E");
    }
    else {
                console.log("Grad: F");
    }
}
else{
    console.log("Enter Valid Degree between 0 and 100");
}
*/

//  *******Using Switch Case*******
/* Q15 
var num1 = Number(window.prompt("Enter month number"));
switch (true){
    case num1==1 || num1==3 || num1==5 || num1==7 || num1==8 || num1==10 || num1==12:
        console.log("Days in months: 31 days") ;
    break;
    case num1==4 || num1==6 || num1==9 || num1==11:
        console.log("Days in months: 30 days") ;
    break;
    case num1==2:
        console.log("Days in months: 28 days") ;
    break;
    default:
        console.log("Invalid month number") ;
    break;
}
*/

/* Q16
var charac = window.prompt("Enter Character");
switch(true){
    case charac=='a' || charac=='e'||charac=='i'|| charac=='o'|| charac=='u' || charac=='A'|| charac=='E'|| charac=='I'|| charac=='O'|| charac=='U':
        console.log(charac+ " is vowel");
        break;
        default:
            console.log(charac+ " is consonant");
        break;
}
*/

/* Q17
var num1 = Number(window.prompt("Enter your number 1"));
var num2 = Number(window.prompt("Enter your number 2"));
switch(true){
    case num1>num2:
        console.log("Max Value: " + num1)
    break;
    default:
        console.log("Max Value: " + num2);
    break;
}
*/

/* Q18 
var num1 = Number(window.prompt("Enter your number"));
switch(true){
    case (num1%2==0):
        console.log(num1 + " Is even");
    break;
    default:
        console.log(num1 + " Is odd");
    break;

}
*/

/* Q19 
var num1 = Number(window.prompt("Enter your number"));
switch (true){
    case num1>0:
        console.log(num1 + " is Positive");
    break;
    case num1==0:
        console.log("Number is zero");
    break;
    default:
        console.log(num1 + " is Negative");
    break;
}
*/

/* Q20 
var num1 = Number(window.prompt("Enter your number 1"));
var oper = window.prompt ("Enter the operator")
var num2 = Number(window.prompt("Enter your number 2"));

switch (true){
    case oper=='+':
        console.log(num1 +' + '+ num2+' = '+ (num1+num2)  );
    break;
    case oper=='-':
        console.log(num1 +' - '+ num2+' = '+ (num1-num2)  );
    break;
    case oper=='*':
        console.log(num1 +' * '+ num2+' = '+ (num1*num2)  );
    break;
    case oper=='/':
        console.log(num1 +' / '+ num2+' = '+ (num1/num2)  );
    break;
    default:
        console.log("Envalid Operator");
    break;
}
*/