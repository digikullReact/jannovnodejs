const {foo} =require("./main");

const firstNumber=process.argv[2];
const secondNumber=process.argv[3];

console.log(foo(parseInt(firstNumber),parseInt(secondNumber)));

//You have two take to string form the command line 
// convert them into uppercase
// and print them after conactenation with -INPUT -> hello world OUTPUT -->HELLO-WORLD