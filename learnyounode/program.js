console.log(process.argv);
var sum = 0;
var array = process.argv;
for (var i = 2; i<array.lenth; i++){
    console.log(process.argv[i]);
    sum = Number(process.argv[i]) + sum;
}
/*process.argv.forEach(element => {
    sum = Number (element + sum);
});*/
console.log(sum);