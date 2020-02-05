//функция

function showDate(text, data){
    var data = new Date();
    var text = 'Date' ;
    alert(text+ ': '+ data);
}
showDate()

let question = function(random, number){
    number = prompt('Input number: ');
    random = Math.floor(Math.random() * 100);
    document.write(`Number:  ${number};
                    <br>Random number:  ${random}; 
                    <br>Sum: ${Number(random) + Number(number)}.`);
}
question();

