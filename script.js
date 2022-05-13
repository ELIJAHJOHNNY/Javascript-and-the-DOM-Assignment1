function msg(){
    alert("WELCOME TO MY JAVASCRIPT ASSIGNMENT 2")
}


/*Design a for loop that returns an array of even numbers from 1-100*/
let EvenNumbers=[]
function GetEvenNumbers(){
    for (let i=1; i<=100; i++)
    if(i % 2 == 0){
        EvenNumbers.push(i)
    }
    console.log(EvenNumbers)
}
GetEvenNumbers()


/*Create a function that returns even numbers between two numbers A and B*/
function EvenNumbersBetween(A,B){
    for (let i = A+1 ; i < B ; i++) /* i=A+1 code, is to avoid including the first number A, since we want numbers in between*/
    if (i % 2 == 0){
        console.log(i)
    }for (let i = B+1 ; i < A ; i++) /*code in case the first number A, is bigger than B*/
    if (i % 2 == 0){
        console.log(i)
    }
}
EvenNumbersBetween(40,60) 
EvenNumbersBetween(80,50)



/*When would you use a conditional statement?*/
let answer=`(b)when you want your code to choose between multiple numbers`
console.log(answer)


/*Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)*/
function firstFunction(a,b){
    return a+b
}
console.log(firstFunction(10,15))


/*Create a function with a function name printSum( ) and print the sum of two numbers.*/
function printSum(a,b){
    console.log(a+b)
}
printSum(20,20)


/*Create a function that returns an array of the names of 10 of your course mates*/
let CourseMates=[`Victor, Abidemi, Fini, Adaobi, Kolade, Augustine, Olayinka, Foluso, Iyin, Sam`]
function MyCourseMates(){
    console.log(CourseMates)
}
MyCourseMates()


/*Add an element to the end of this array [1,2,4]*/
let Array=[1,2,4]
Array.push(5)
console.log(Array)


/*Remove the last element in this array [1,2,3,8]*/
let Array1=[1,2,3,8]
Array1.pop()
console.log(Array1)


/*Remove the first element in this array [23.77,80,45]*/
let Array2=[23,77,80,45]
Array2.shift()
console.log(Array2)


/*Add an element to the beginning of the array [[20,30,80],[10,50,55]]*/
let Array3=[[20,30,80],[10,50,55]]
Array3.unshift(50)
console.log(Array3)
