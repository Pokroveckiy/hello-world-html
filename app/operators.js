// завдання 1
a=1;
b=5;
c=7;
if(a<b && b<c){
  console.log('true');
} else{
  console.log('false');
}

// завдання 2
let x = 1;
let y = 2;

let res1 = ""+(x+y); 
console.log(res1); 
console.log(typeof res1);

let res2 = Boolean(x)+""+ y;
console.log(res2); 
console.log(typeof res2); 

let res3 = x < y; 
console.log(res3); 
console.log(typeof res3);

let res4 = x/0;
console.log(res4); 
console.log(typeof res4); 
