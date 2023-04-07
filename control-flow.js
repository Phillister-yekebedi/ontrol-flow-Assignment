//Write a function that accepts an array of strings and console.logs each element using a for loop.
function names(arrayStrings){
for(let i=0; i<arrayStrings.length;i++){
    console.log(arrayStrings[i]);
}

}
let arrayStrings=['Wycliffe','Yekebedi', 'Rabecca'];
names(arrayStrings)



//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function numbers(arrNum){
    arrNum.forEach(element => {
        console.log(element*2)
    });
        
   
}
let arrNum=[1,2,3,5,6,4];
numbers(arrNum)



//Write a function that takes in an array of numbers and consoles the first four items
// multiplied by 8 and the last two added by 5. Console the array with the new values
function number(arr){
 let Arr =[...arr];
 Arr[0]*=8
 Arr[1]*=8
 Arr[2]*=8
 Arr[3]*=8
 Arr[Arr.length-2]+=5
 Arr[Arr.length-1]+=5

}
let Arr = [3,4,6,9,3,5,10]
console.log((Arr))

//Write a function that takes in the following array and use a while loop to iterate and 
//break when the item is equal to the fourth index
//let arrNum = [1,2,3,4,5,6,7,8,9];

let arrnum = [1,2,3,4,5,6,7,8,9]
function Array(arrnum) {
    let p= 0;
    while(p <arrnum.length){
        console.log(arrnum[p]);
        if(p=== 4){
            break;
        }
        p++
    
    }
}
Array(arrnum)


//Write a function that takes in an array of strings and use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']
function Fruits(fruits){{}
    for(let y=0; y<fruits.length; y++){
        if(y === 2){
            continue;
        }
        console.log("continue", fruits[y]);
        
    }
    
}
Fruits(fruits)