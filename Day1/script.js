// let n=5;
// for(let i=0;i<n;i++){
//     console.log("Hello World");
// }
// console.log("Good Bye!");

// console.log(process.argv)

// let arguments=process.argv;

// for(let i=2;i<arguments.length;i++){
//     console.log("Hello "+arguments[i]);
// }


// const math=require("./math");

// console.log(math.sum(3,5));
// console.log(math.mul(5,5));
// console.log(math.g);
// console.log(math.pi);


const fruits=require("./Fruits");

for(let i=0;i<fruits.length;i++){
    console.log("Item "+(i+1));
    console.log("Name : "+fruits[i].name);
    console.log("Color : "+fruits[i].Color);
}