console.log("Hai Training")  //print -- inspect

//alert("Hello abinaya") // print -- current 

const num1 = parseInt(prompt('Enter a number 1 :'))  //parseInt -  string to number  // prompt  - print the number from user
const num2 = parseInt(prompt('Enter a Number 2 :'))

const add = num1+num2;

console.log(add)
console.log(`The sum of ${num1} and ${num2} is ${add}`) /// $  ``


//odd or even ------ if else  + - *  / %

const number = prompt('Enter a number : '); 

if(number % 2 == 0 ){    ///  '' ""  ``
  console.log(`The number ${number} is EVEN`)
} else{
    console.log(`The number ${number}  is ODD`)
}
