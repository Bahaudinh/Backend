// let n=5;
// for(let i=0;i<n;i++){
//     console.log("Hello World");
// }
// console.log("Good Bye!");

// console.log(process.argv)

let arguments=process.argv;

for(let i=2;i<arguments.length;i++){
    console.log("Hello "+arguments[i]);
}