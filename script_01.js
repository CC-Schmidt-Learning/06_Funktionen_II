
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : checke!
*/
startApp();
function startApp(params) {
  output(calculator(getNumber("first"), getNumber("second"), getOp()));  
};

function getNumber(figure) {
let inputStr = prompt("Please insert " + figure + " number");
let num =parseInt(inputStr);
return num;
};

output(getOp());
function getOp() {
let op = prompt("Please insert correct operator: ");
if (isOpValid(op)) {
    return "operator okay";
} else {
   return "operator nicht okay";
}
};

function isOpValid(op) {
switch (op) {
    case "+":
    case "-":
    case "*":
    case "/": 
    case ":":  
    return true;

    default:
    return false;
}


};

// output(calculator(2,2,"+"));
// output(calculator(2,5,"-"));
// output(calculator(4,5,"*"));
// output(calculator(6,1,":"));
// output(calculator(6,0,":"));
// output(calculator(9,9,"%"));

function calculator(a,b,op) {
 switch (op) {
    case "+":
        return add(a,b);

    case "-":  
        return substract(a,b);

    case "*":
        return multiply(a,b); 

    case ":":
    case "/":
        return divide(a,b);

    default: //ERROR
    return "something went wrong";
 };

};

//module: addition a+b | test:

function add(a,b) {
return a + b;    
};

function substract(a,b) {
    return a - b;  
};

function multiply(a,b) {
return a * b;    
};

function divide(a,b) {
    return (b != 0) ? a / b : " Division by zero";
};

//module: console output | test
//output("hello");
//output(2);
function output(outputData) {

//console.log(typeof outputData);

    if (typeof outputData=="number") {
    console.log("The result is: "+ outputData);
    } else{
console.log("Error: " + outputData)
    }
};