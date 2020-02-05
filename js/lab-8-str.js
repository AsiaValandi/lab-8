// строка

let str = prompt('Input text: ',"");
let letter = prompt('Input letter: ',"");
let c = 0;
for (i = 0; i<str.length; ++i){
    if (str.substring(i, i+1)==letter){
        c++;
    }
}
console.log(letter+' count ' + c);