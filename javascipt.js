//let a = {
  //  num: 1,
    //"s" : "dkjhasjkd",
    //obj : {
      //  b : 2
    //},
    //fun : ()=>{
      //  console.log("Hello world");
    //}
//};
//console.log(a,s);
//console.log(a["num"]);
//console.log(a[obj].b)
//console.log(a.obj.b)
//console.log(a.fun());
//console.log(Object.keys(a));
//console.log(Object.values(a));

//for (const key in a){
  //  console.log(key);
//}
//-----------------------------------

//1.- sum of two integers
//let a = 10;
//let b = 30;
//let sum = a+b;
//console.log("sum:",sum);

//-------------------------
//2. print the massege along with value and sum
    // ex- the sum of 45 & 12 = 57


//let num1 = 45;
//let num2 = 40;
//let sum = num1 + num2;

//console.log(`The sum of ${num1} & ${num2} = ${sum}.`);

//--------------------------------
  
//3.Accept two integers from user and print the sum
     //ex- the sum of 45 & 12 = 57


     //let num1 = +prompt("Enter first number");
     //let num2 = +prompt("Enter second number");
     //let sum = num1 + num2;

     //console.log(`The sum of ${num1} & ${num2} = ${sum}.`);

  //--------------------------------
    
  //4.Accept the user's name, age and print in following manner 
    //Ex- Hello shery , you are 12 year old.
    
    //let name = +prompt("Enter your name");
    //let age = +prompt("Enter your age");

    //console.log(`Hello ${name},you are ${age} year old.`);

    //-------------------------------

//7. accept the length and width of a rectangle. calculate & print the area and perimiter.

//let length = +prompt("Enter the length");
//let width = +prompt("Enter the width");
//console.log(`The area of rectangle is ${length*width}.`);
//console.log(`The perameter of rectangle is ${2*(length+width)}`);
//---------------------------------

//8.Accept the perameter and calculation the Compound Interest & print it on STDOUT(use math class method)

//let p = +prompt("Enter the principle amount")
//let r = +prompt("Enter the rate of intrest")/100
//let t = +prompt("Enter the time in years")
//let n = +prompt("Enter the number of time interest applied per time period")
//let ci = p*Math.pow(1+r/n,t*n);
//let intrest = ci-p;
//console.log("Simple interest :", interest.tofixed(2));
//console.log("Total interest:",ci.toFixed(2));

//---------------------------------

//9.Accept the three sides of triangle and calculate the area using herons formula.

//let a = +prompt("Enter the length of a");
//let b = +prompt("Enter the length of b");
//let c = +prompt("Enter the length of c");
 
//let s = (a+b+c)/2;
//let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

//console.log(area.toFixed(2));
//----------------------------

//10.find the surface area of sphere

//let r = +prompt("Enter radius of the sphere")
//let area = 4 *Math.PI*r*r
//console.log(area);

//----------------------------
//11.find the cirumference and area of circle

//let r = +prompt("Enter the radius of circle");
//let cirumference = 2*Math.PI*r;
//console.log(cirumference.toFixed(2));

//-------------------------
//12.Accept two numbers and print the greatest between them 

//let a = +prompt("Enter the first number");
//let b = +prompt("Enter the second number");

//if(a>b){
 // console.log(a);
//}else if (b>a){
  //console.log(b);
//}else{
  //console.log("both are equal");
//}

//13.Accept the gander from the user as char and print the responsive greeting message 
//ex - Good morning Sir (on the basis of gander)

//let g = prompt("Enter your gender");

//if(g == "m"){
  //console.log("Good morning sir");
//}else if (g == "f"){
  //console.log("Good morning ma`am");
//}else{
  //console.log("invalid");
//}

//------------------------------------------

//14.Extend the previous program and handle the worng inputs.
//print Good Morning sir for input m or M and f or F else print wrong input

//let gender = prompt("Enter your gender")
//if(gender == "m"|| gender == "M"){
  //console.log("Good morning sir");
//}else if(gender == "f" || gender=="F"){
  //console.log("Good morning ma`am");
//}else{
  //  console.log("wrong input");
//}
//--------------------------
//15.

//let n = +prompt("Enter a number");
//if(n%2 ==0){
  //console.log("even number");
//}else{
 // console.log("odd number");
//}

//16.
//let name = prompt("Enter your name");
//let age = +prompt("Enter your age ");
//if(age>=18){
  //console.log(`Helle ${name},You are a valid for vote`);
//}else{
  //console.log(`Sorry ${name},You can't a valid for vote.`);
//}

//part 2
//let name = prompt("Enter your name");
//let age = +prompt("Enter your age ");
//if(age>=18){
  //console.log(`Helle ${name},You are a valid for vote`);
//}else{
  //console.log(`Sorry ${name},You will be eligible for voting after ${18-age}year`);
//}
//---------------------------------------------
//17.
//let day = +prompt("Enter the day number");
//if(day == 1){
  //console.log("Monday")

//}else if(day ==2){
  //console.log("Tuesday")
//}else if(day ==3){
  //console.log("Wednesday")
//}else if(day == 4){
  //console.log("Thursday")
//}else if (day == 5){
  //console.log("friday")
//}else if(day == 6){
 // console.log("Saturday");
//}else if (day == 7){
  //console.log("Sunday")
//}else{
  //console.log("invalid")
//}

//18.

//let a = +prompt("Enter the first number");
//let b = +prompt("Enter the second number");
//let c = +prompt("Enter the third number");

//if(a>b && a>c){
  //console.log(a);
//}else if(c>a && b>a){
  //console.log(b);
//}else{
  //console.log("all are eqal");
//}

//19 Accept the year and check if it a leap year or not.

//let year = +prompt("Enter the year")

//if(year%4 == 0){
  //if(year%100 ==0){
    //if(year%400 == 0){
      //console.log("leap year");
    //}else{
      //console.log("Not a leap year");
    //}
  //}else{
    //console.log("leap year");
  //}
//}else{
  //console.log("Not a leap year");
//}
//---------------------------------------------------
//20.
//1000 - 10%
//1000-2000  20%
//200+ 30%

//let price = +prompt("Enter the price");

//if(price <= 1000){
//  console.log("Discount Price :,",(price - (price*(0.1))))
//}else if(1000> price && price <=2000){
//  console.log("Discounted price:",(price-(price*(0.2))))
//}else{
 // console.log("Discount Price :", (price-(price*(0.3))))
//}

//21.

//22.Accept an english alphabet from user and check if it is a consonent or a vowel.

//let alphabet = prompt("Enter the alphabet");
//if(alphabet == "a"|| alphabet == "e"|| alphabet == "i" || alphabet == "o" || alphabet =="u"){
  //console.log("vowel");
//}else{
  //console.log("consonent");
//}

//-------------------------
//23. Accept an integer and print the hello world n times
  
//let n = +prompt("Enter the number");
//for( let i=1; i<=n; i++){
 // console.log("Hello World",i);
//}

//24. print the natural number up to n
//let n = +prompt("Enter the number");

//for(let i=1; i<=n; i++){
 // console.log(i);
//}

//25.Reverse for loop .print n to 1

//let n = +prompt("Enter the number")
//for(let i=n; i>=1; i--){
 // console.log(i);
//}

//26. Take a number as input and print its table
    //ex -5*1 = 5
    // 5*2 = 10..

//let n = +prompt("Enter the number")
//for( let i=1; i<=10; i++)
//{
  //console.log( `${n}* ${i} =${i}`);

  //console.log(`${n}*${i} = ${n*i}`)
//}
//-------------------------------

//27.sum up to n terms

//let n = +prompt("Enter the number");

//for(let i=1; i<=10; i++){
  //sum = sum + i;
//}
//console.log(sum);

//28.Factorial of a number

//let n = +prompt("Enter the number");
//let fact = 1;

//for(let i=1; i<=n; i++){
  //fact = fact*1;
//}
//console.log(fact);
//----------------------------
//29. Print the sum of all even & odd number is a range seperately

//let a = +prompt("Enter the first number");
//let b = +prompt("Enter the second number");

//for(let i=a; i<=b; i++){
 // if(i%2 == 0){
  //  even = even +i;
  //}else{
   // odd=odd+i;
  //}
//}
//console.log(`Even sum is ${even} and odd sum is ${odd}`);

//30. print all the factor number.
//let arr = [1,2,3,4,5,6,7]
//let n = +prompt("Enter the number")
//for(i=1 ;i<=n;i++){
 // if(n%i ==0){
  //  console.log(i);
  //}
//}
//console.log(arr.splice(2,3));

//31.print the sum of all factor of a number, 50-> 1+2+5+10+25 = 43

//let n = +prompt("Enter the number")
//let sum = 0;
//for(i=0;i<=n;i++){
  //if(n%i == 0){
    //sum = sum+i;
  //}
//}
//console.log(sum);

//32.check if the number is prime or not

//let n = +prompt("Enter the number");
//let flag = ture 
//for(let i=2;i<=n/2 ; i++){
  //if(n%i == 0){
    //flag = false;
    //break
  //}else{
    //flag=true;
  //}
//}
//console.log(flag?"Prime": "Not-Prime")

//33.write a program to take two inputs a,b and find the value of a,b & find the value of a raised to the power of b.
//ex- a=2, b=5 
// op - 2^5 = 32

//without using loop

//let a = +prompt("Enter the number")
//let b = +prompt("Enter the second number")
//let ans = a**b;
//console.log(ans)

//using loop

//let a = +prompt("Enter the first number")
//let b = +prompt("Enter the second number")
//let ans = 1;
//for(let i=1;i<=b;i++){
 // ans = ans*a;
//}
//console.log(ans);

//34.seprate each digit of a number and print it on the new line ex-123
//op 3
//   2
//   1

//let a = +prompt("Enter the number")

//while(a>0){
  //let rem = a%10;
  //console.log(rem);
  //a = Math.floor(a/10)
//}

//35-sum of digit of number,936 = 18

//let a = +prompt("Enter the number")
//let sum = 0
//while(a>0){
 // let rem = a%10
  //sum = sum +rem
  //a = Math.floor(a/10)
//}
//console.log(sum)

//36.Accept a number and print its reverse


//let a = +prompt("Enter tthe number")
//let  rev=0;
//while(a>0){
  //rev = (rev*10) +(a%10)
  //a = Math.floor(a/10)
//}

//console.log(rev)

//37-Accept a number and if it is a pallindromi number (if number and its reverse are equal)
  //ex - 12321- reverse- 12321
//let a = +prompt("Enter the number")
//let temp = a;

//let rev = 0;
//while(a>0){
  //rev =(rev*10) + (a%10)
  //a = Math.floor(a/10)
//}

//console.log(rev==temp? "Palindrom":"not Palindrome");

//38. Accept a number and check if it is strong number or not(sum of factorial of each digit)
// Ex- 145= 1! +4! + 5!

//let a = +prompt("Enter the number")
//let temp = a;

//let sum = 0;
//while(a>0){
 // let rem = a%10;
  //let fact = 1;
  //for(let i=1; i<=rem;i++){
   // fact = fact*i;
  //}
  //sum = sum+fact;
  //a = Math.floor(a/10)
//}

//console.log(sum == temp?"strong":"not strong")

//----------------------------------------

//40. Print hello until user gives wrong input using do while

//let i = 0;
//do{
  //i = +prompt("Enter the number")
  //console.log("Hello World")
//}while(i!=10);


//41. Make a choice based calculator using do while

//let i 

//do{
 // console.log("Menu\n1. Addition\n2. Subtraction\n3. multiplication\n4. Division\n5. Modulus\n6.Exit")
  //i = +prompt("Enter your choice")
  //if(i==1){
   // let a = +prompt("Enter the number")
    //let b = +prompt("Enter the number")
    //console.log("Addition",a+b)
  //}else if(i==2){
   // let a = +prompt("Enter the number")
    //let b = +prompt("Enter the number")
    //console.log("subtraction",a-b)
  //}else if(i==3){
   // let a = +prompt("Enter the number")
    //let b = +prompt("Enter the number")
    //console.log("Multiplication",a*b)
  //}else if(i==4){
   // let a = +prompt("Enter the number")
    //let b = +prompt("Enter the number")
    //console.log("Division",a/b)
  //}else if(i==5){
   // let a = +prompt("Enter the number")
    //let b = +prompt("Enter the number")
    //console.log("Mod", a%b)
  //}else{
   // console.log("Invalid Input")
 // }
//} while(1!=0);

//42.Print weekday using switch

//let i = +prompt("Enter the number")
//switch(i){
 // case 1:
   // console.log("Monday")
    //break;
  //case 2:
   //   console.log("Tuesday")
    //  break;
  //case 3:
   // console.log("Wednesday")    
    //break;

  //case 4:
   // console.log("Thursday")
    //break;
  //case 5:
   // console.log("Friday")  
    //break;
  //case 6:
   // console.log("Saturday")  
    //break;
  //case 7:
   // console.log("Sunday")
    //break;  
//}

//43.
//let alphabet = prompt("Enter the alphabet");
//switch(alphabet){
 //    case "a":
 //     case "i":
 //     case "e":
 //     case "o":
 //     case "u":
 //       console.log("vowel");
 //       break;
 //     default:
 //       console.log("Consonent")       
  //}

//44.Project- guess game
//       Write a program that generates a random number and asks the user to guess what the number is.
//       If the user's guess is higher than the random number, the program should display "Too high, try again."
//       If the user's guess is lower than the random number, the program should display "Too low, try again."
//       The program should use a loop that repeats until the user correctly guesses the random number.

//let i = Math.floor(Math.random()*100)
//console.log(i)
//let j;
//do{
  //j = +prompt("Enter the number")
  //if(j>i){
    //console.log("to high, try again") 
  //}else if(j<i){
  //  console.log("to low,try again")
  //}else{
   // console.log("Correct");
  //}
//}while(j!=i)

//46.Right Triangle-star
//*
//** 
//*** 
//**** 
//***** 

//function printStarPattern(row){
  //for(let i=1; i<=row;  i++){
    //let star = '';
    //for(let j = 1; j<=i; j++){
      //star +='*';
    //}
    //console.log(star);
  //}
//}
//printStarPattern(5);

//47.Right triangle - number

//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5 

//for(let i = 0; i<=5; i++){
  //let pattern = '';
  //for(let j = 1; j<=i+1 ; i++){
   // pattern +=j;
  //}
  //console.log(pattern);
//}

//49.Inverted right triangle
//*****
//****
//*** 
//** 
//*
//let n = +prompt("Enter the number")
//for(let i=0; i<n; i++){
//  let pattern = '';
//  for(let j=0; j<n-1; j++){
 //   pattern +='*';
 // }
 // console.log(pattern);
//}

//54. Accept size n from user and create a n size array then take n inputs into the and finally
// Print the sum and avg of all elements.

//let n = +prompt("Enter the number")

//let arr = []
//for(let i=0; i<=n; i++){
 // arr[i] = +prompt("Enter the number")
//}

//let sum = arr.reduce((a,b)=>a+b,0)
//let avg = (sum/n).toFixed(1)
//console.log(`The number you entered is ${arr} and the sum sum is ${sum} and the avg is ${avg}`)

//55.find the greatest element 
//{2, 96,69,77,145,20} = Max element = 145 found at 4 index

//method 1
//using inbuilt function 
//let ans = Math.max(2,96,69,77,145,20)
//console.log(ans)

//method 2

//let arr = [2,96,66,88,670,20]
//let max = 0;
//arr.forEach((e,i)=>{
 // if(e>arr[max]){
 //   max = i;
 // }
//})
//console.log(arr[max],max);

//56. find the second greatest element
// {2,96,69,77,145,20}

//let arr =[2,96, 69, 77, 145 ,20]
//for(let i=0; i<arr.length; i++){
 // for(let j=i+1; j<arr.length; j++){
 //   if(arr[i]>arr[j]){
 //     let temp =arr[i];
 //     arr[i] = arr[j];
 //     arr[j] = temp;
 //   }
 // }
//}

//console.log(arr.at(-2))

//57. Check if array is sorted in increasing order or not.
// Ex1- {1,5,8,9,10,15} - OP="yes"                                                                                 
// Ex2- {1,8,6 ,9 ,10, 15} - op="no"

//let arr =[1,6,9,10,15]

//let flag = true;
//arr.forEach((e,i)=>{
 // if(e>arr[i+1]){
   // flag = false;
 // }
//})
//console.log(flag);

//58.Take n inputs from user and store them in an array.
// now, copy all the element in an another array but in reverse order and print it.
 
//let n= +prompt("Enter the length of array")
//let arr=[]

//for(let i=0; i<=n; i++){
  //arr[i] =+prompt("Enter the number")
//}

//let arr2 =arr.reverse()
//console.log(arr2)

//59.Arrayl left rotation by 1

//let arr = [1,2,3,4,5]

//let temp = arr[0]
//for(let i=0; i<arr.length-1; i++){
  //arr[i] = arr[i+1]
//}
//arr[arr.length-1]= temp
//console.log(arr)

//60. Array left rotation by k element

//let arr = [1,2,3,4,5]
//let k = 4;

//for(let i=0; i<k; i++){
 // let temp = arr[0]
  //for(let j=0; j<arr.length-1; j++){
   // arr[j] = arr[j+1];
  //}
  //arr[arr.length-1] = temp;
//}

//console.log(arr)

//61.Array Reverse Without uing Extra space


//62- linear Search an array - if element found print the index else-1
//let arr = [1,2,3,4, 5,6,7,8,9,10]

//let target = 9;
//let flag = -1;
//arr.forEach((e,i)=>{
  //if(e == target){
   // flag = i;
 // }
//})
//console.log(flag);

//63. Binary Search- if element found print the index else-1

//let arr= [1,2,3,4,5,6,7,8,9]

//let target = 12;

//let s = 0;
//let e = arr.length-1
//let mid = 0;
//let flag = -1 ;
//while(s<=e){
 // mid = Math.floor((s+e)/2)
  //if(arr[mid] == target){
    //flag = mid
    //break;
  //}else if(arr[mid] > target){
    //e = mid-1
  //}else{
   // s = mid+1
  //}
//}
//console.log(flag)

//64.bubble sort.
//let arr = [66,7,6,5,1,4]
//for(let i=0; i<arr.length-1; i++){
//  for(let j=0; j<arr.length-i-1; j++){
  //  if(let j=0; j<arr.length[j+1]){
   //   let temp =arr[j]
    //  arr[j]=arr[j+1]
     // arr[j+1]=temp
   // }
  //}
//}
//console.log(arr)

//65. Move all the negative elements on left side and positive elements on right side O(n).
  //let arr = [-1,-3,2,4,-6,9,-7]

  //for(let i=0; i<arr.length; i++){
   // if(arr[i]<0){
     // arr.unshift(arr[i])
      //arr.splice(i+1,1)
    //}
  //}

  //console.log(arr)

// 66- Print the count of subarrays whose sum is equal to the target.
// 	Ex - {1,2,3,7,5}, T = 12  O/P - 2 - [ {2,3,7}, {7,5} ] - Both the subarrays has sum 12 

//let arr = [1,2,3,7,5]

//let target = 12;
//let count = 0;
//let sum = 0;
//let i =0;
//let j = 0;

//while(j<arr.length){
  //sum += arr[j];
  //while(sum>target){
  //  sum -= arr[i]
    //i++;
 // }
  //if(sum == target){
    //count++
 // }
  //j++
//}
//console.log(count)

//67- Strong number using methods

//let num = 333
//let temp =num;
//let sum = 0;

//function fact(n){
  //let fact = 1;
  //for(let i=1; i<=n; i++){
    //fact *=i;
  //}
  //return fact;
//}

//while(num>0){
  //  let rem = num%10;
   // sum += fact(rem);
    //num = Math.floor(num/10)
//}

//if(sum == temp){
  //console.log("Strong Number")
//}else{
  //console.log("Not Strong Number")
//}
//console.log(sum ==temp? "Strong" : "Not Strong Number")

// 69- Leetcode 1929 - Concatenation of array 
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.


//let hero = [1,2,3]
//let ans = arr.concat(arr)

//function concat(arr){
 // let ans =[]
 // for(let i =0; i<arr.length; i++){
 //   ans.push(arr[i])
 // }
 // ans = [...arr,...ans]
 // return ans
//}
//console.log(concat(hero))

// 71- Accept a string from user and print its each character on a new line
//let s = prompt("Enter the string")

//s.split("").forEach((value)=>console.log(value))

// 72- Accept a string and print it in reverse order

//let s = prompt("Enter the string")

//s.split("").reverse().forEach((value)=>console.log(value))




// 73- Check if the string is Pallindromic or not

//let s = prompt("Enter the string")

//let check = s.split("").reverse().join("")

//console.log(s==check? "Pallindromic": "Not-Pallindromic")


// 74- Pallindromic String using method and Two pointer algorithm (hint: Array reverse algo)

// let string = prompt("Enter the string")
// function checkStringPalindrom(s){
// 	let flag = true
// 	for(let i = 0 ; i<s.length ; i++){
// 		let left = i
// 		let right = s.length-i-1
//    while(left<right){
//if(s[left] != s[right]){
//flag = false
//  break
//  }
//    left++
//      right--
//       }
         
         
//  }
      



