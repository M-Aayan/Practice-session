// let arr = [1, -2, 54, 33, -22, 3, -21 , 32]
// let positiveArr = arr.reduce(positiveValue)

// function positiveValue(element) {
//     if (element > 0) {
//         return element += element
//     }else{
//         return 0
//     }
// }

// console.log(positiveArr);


// let arr = [1, 7, 3, 99, 22] 
// let maxArr = Math.max(...arr)

// console.log(maxArr);

// let str =  "hello"
// let arr = str.split("")
// let length = arr.length
// let filterVowel = arr.filter((element)=>{
//     let vowels = ["a", "e", "i", "o", "u"]
//     return vowels.includes(element)
// })


// console.log(`the number of vowel is ${filterVowel} , the number of vowel is ${filterVowel.length}`)


// let name = "aayan".split("").reverse().join("")
// console.log(name);



// for (let num = 1; num <= 20; num++) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (num % 3 === 0) {
//         console.log("Fizz")
//     } else if (num % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(num)
//     }
// }



// const multiply = (a,b) => {
//     return a * b
// }
// console.log(multiply(3, 4));
    

// const calculate = (a, b, callback) => {
//     return callback(a, b)
// }

// console.log(calculate(2, 4, (a, b)=> a-b));
// console.log(calculate(2, 4, (a, b)=> a+b));
// console.log(calculate(2, 4, (a, b)=> a*b));



// let num = [1,2,3,4,6,7,9,7,32,12,45,65,87,12]
// let Even = num.filter((evenNum) => {
//     return evenNum % 2 === 0
// } )

// console.log(Even);

// let num = [1,2,3,4,5,6]
// const doubleNum = num.map((num)=>{
//     return num * 2
// })
// console.log(doubleNum);



// let cart = [
//     { name: "shirt", price: 500 },
//     { name: "pants", price: 1200 },
//     { name: "shoes", price: 2500 }
// ]

// const totalPrice = cart.reduce((total, item) => total + item.price, 0)
// console.log(totalPrice);

// let cart = [
//     { name: "Shirt", price: 500 },
//     { name: "Pants", price: 1200 },
//     { name: "Shoes", price: 2500 },
//     { name: "Cap", price: 300 }
// ]


// const totalPrice = cart.reduce((total, item) => total + item.price, 0)
// console.log("Total:", totalPrice)

// const updatedCart = cart.filter((item) => item.name !== "Shoes")
// console.log("Updated Cart:", updatedCart)

// const updatedTotal = updatedCart.reduce((total, item)=>total + item.price, 0)
// console.log("Updated Total:", updatedTotal)


// const formatName = (name) => {
//     let element = name.trim().split(" ")
//     let formattedName = element.map(format)
//     return formattedName.join(" ")
// }

// const format = (element) => {
//      return element[0].toUpperCase() + element.slice(1)
//     }

// console.log(formatName(" muhammad aayan"));


// const shortText = (text, number) => {
//     let short = text.slice(0, number)
//     if (text.length > number) {
//         return short + "..."
//     }else {
//         return short
//     }
// }

// console.log(shortText("hello my name is aayan", 8))  
// console.log(shortText("JavaScript is awesome", 6))    
// console.log(shortText("Hi", 10)) 




// const uniqueNumbers = (arr) => {
//     return [...new Set(arr)]
// }

// console.log(uniqueNumbers([1, 2, 2, 3, 4, 4, 5]))
// console.log(uniqueNumbers([10, 10, 20, 30, 30]))
// console.log(uniqueNumbers([5, 5, 5, 5]))


// let students = [
//     { name: "Aayan", marks: 85 },
//     { name: "Ali", marks: 45 },
//     { name: "Sara", marks: 72 },
//     { name: "Ahmed", marks: 30 },
//     { name: "Zara", marks: 91 }
// ]

// students.forEach((students)=> {
//     if (students.marks >= 50) {
//         console.log(`${students.name} get ${students.marks} marks`);
            
//     }
// })


// let students = [
//     { name: "Aayan", marks: 85 },
//     { name: "Ali", marks: 45 },
//     { name: "Sara", marks: 72 },
//     { name: "Ahmed", marks: 30 },
//     { name: "Zara", marks: 91 }
// ]


// const topStudent = (students) => {
//     let top = students.reduce((top, current) => 
//         current.marks > top.marks ? current : top
//     )
//     return `${top.name} — ${top.marks}`
// }

// console.log(topStudent(students))




















































