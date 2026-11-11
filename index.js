

//Task : 

//Part 1: Primitive Data Types
//1.Create a variable studentName and assign your name. Print its data type. 
 var studentName="raju"
 console.log(typeof(studentName));


//2.Create a variable employeeAge and assign your age. Print its data type.
 var empoloyeeage=28
 console.log(typeof(empoloyeeage));

//3.Create a variable is Working and assign true. Print its data type.
var guru=true
console.log(typeof(guru))
//4.Declare a variable without assigning a value. Print its value.
var a;
console.log(a)


//5.Create five variables using string, number, boolean, undefined, and null.
var a="hello"
const c=120
var d=true
var s;
var q=null

//6.Print the data type of each variable using typeof.
var z="hello"
const x=120
var y=true
var v;
var w=null

console.log(typeof(z))
console.log(typeof(x))
console.log(typeof(y))
console.log(typeof(v))
console.log(typeof(w))

//7.Create a variable courseName with the value "JavaScript" and print it.
var coursename ="javaScript"
console.log(coursename)
//8.Create a variable batchNumber with the value 42 and print its data type.
var batchNumber=42
console.log(batchNumber)

//Part 2: Arrays

//9.Create an array containing five fruit names.
let fruit =["apple","banana","orenge","grapes","strawberry"]

//10.Print the first element of the array.
console.log(fruit[0])

//11.Print the third element of the array.
console.log(fruit[3])

//12.Print the last element using length.
console.log(fruit.length-1)

//13.Create an array containing your name, age, city, and designation.
var container=["guru",24,"puttaparthi","full stack developer"]

//14.Print each element using its index.
console.log(container[0])
console.log(container[1])
console.log(container[2])
console.log(container[3])

//15.Create an array containing strings, numbers, and boolean values.
var containers=["guru",24,true]

//16.Print the total number of elements using length.
console.log(length(containers))

//17.Create an array containing five mobile brands and print the second brand.
var mobilebrands=["apple","vivo","oppo","redme","motorola"]
console.log(mobilebrands[1])

//18.Create an array containing six programming languages and print the last language.
var languages=["c","python","c++","java","DBMS","javascript"]
console.log(languages[-1])


//Part 3: Objects

//19.Create an object named student with name, age, and city properties.
var student=["guru",24,"puttaparthi"]

//20.Print the student's name using dot notation.
console.log(students.name);

//21.Print the student's age using dot notation.
console.log(students.age);

//22.Create an object named employee with name, salary, and designation.
let employee={
    name:"guru",
    salary:500000,
    designation:"full stack developer"
}
//23.Create an object containing an array of five skills. Print the third skill.
let skills={
    skillset:[ "java","python","c","c++","DBMS"],
  
}
  console.log(skills.skillset[2])
//24.Create an object containing fruit, number, boolean, and toy properties.
let containerss={

     fruit:"apple",
     number:10,
     boolean:true,
     toy:"ktm"

}
//25.Print the toy property.
console.log(container.toy)

//26.Create an object named company with company name, location, and employee count.
let companys={
    companyname:"stackly",
    location:"bengulor",
    employeecount:5000
}

//Part 4: Arithmetic Operators

//27.Add two numbers and print the result.
var aa=200
var ba=300
console.log(aa+ba)

//28.Subtract two numbers and print the result.
var aaa=200
var baa=300
console.log(aaa-baa)

//29.Multiply three numbers and print the result.
var q=100
var w=200
var e=300
console.log(q*w*e)

//30.Divide 100 by 5 and print the result.
var r=100
var t=5
console.log(r/t)
//31.Find the remainder when 25 is divided by 4.
var y=25
var u=4
console.log(y%u)
//32.Calculate \(3^4\) using the exponentiation operator.
console.log(3**4);

//33.Create two variables and perform all six arithmetic operations on them.
let num1=10
let num2=20
console.log("add",num1+num2)//output=30
console.log("sub",num1+num2)//output=10
console.log("mul",num1+num2)//output=200
console.log("div",num1+num2)//output=0.5
console.log("mod",num1+num2)//output=10
console.log("expo",2**3)//output=8

//Part 5: Increment and Decrement


//34.Create a variable with value 10 and use pre-increment.
var pre =10
console.log(++pre)

//35.Create a variable with value 20 and use post-increment.
var post =20
console.log(post++)

//36.Create a variable with value 30 and use pre-decrement.
var pre =30
console.log(++post)

//37.Create a variable with value 40 and use post-decrement.
var post =40
console.log(post--)

//38.Predict the output before running this code:

let g = 10;
let k = a++;
console.log(g);
console.log(k);
//output
g=11
k=10
//39. Predict the output before running this code:
let z = 15;
let y = ++z;
console.log(z);
console.log(y);
//output
z=16
y=16
//40. Predict the final values of all variables:
let num1 = 25;
let num2 = --num1;
let num3 = num2++;
let num4 = ++num3;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
//output
num1=24
num2=25
num3=25
num4=25