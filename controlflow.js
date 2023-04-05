//Write a function that accepts an array of strings and console.logs each element using a for loop.

let arr=["mercy","faith","caren","linda"];
function Arraystrings(arr){
for(let k=0; k<arr.length;  k++)
     console.log(arr[k])
    };
    Arraystrings(arr)


//Write a function that accepts an array of numbers and uses the forEach()
 //method to console.log each number multiplied by 2.


let numbers=[65,90,79,30,25];
let num1=[]
numbers.forEach(ArrayNumbers)
function ArrayNumbers(num){
num1.push(num*2)

}
console.log(num1)


//Write a function that takes in an array of numbers and
// consoles the first four items multiplied by 8 
//and the last two added by 5. Console the array with the new values

let z =[2,4,6,7,8,9]
let r =[]
function newValues(z){
    for(let x=0;x<z.length;x++){
        if(x<4){
            r.push(z[x]*8)
        }
        else if(x>-2){
            r.push(z[x]+5)
        }
    }
    console.log(r)
}
newValues(z)





//Write a function that takes in the following array and use a while loop 
//to iterate and break when the item is equal to the fourth index
let srtingarray=["Rose", "Mercy","Faith","Me","spoon","food"]

function names(srtingarray){
    let i=0
    while(i <srtingarray.length){
        console.log(srtingarray[i])
        if(i===4){
            break;
        }
        i++
    }
}
names(srtingarray)



//Write a function that takes in a an array of strings
 //and use a continue statement when the item is at the second index


function fruits(arrFruits){
for(let p=0;p < arrFruits.length;p++){
    if(p===2){
        continue;

    }
    console.log({"continue":arrFruits[p]});

}
}
let arrFruits= ['apple','plum','banana','strawberries','kiwi'];
fruits(fruits);

