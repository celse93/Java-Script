
/* variable btnDark created to save the value of the button type which is fetched from 
DOM (HTML file) through its ID
*/
var btnDark = document.getElementById('btnDark');

// event added which executes the function after clicking
btnDark.addEventListener('click', function(){
    
    // function which we want to execute after clicking the button (change background color)
    document.body.style.backgroundColor = 'darkblue';

    // log to monitor the execution of the code
    console.log('dark mode activado');
})


/* same code as above with functions for when the button (Light Mode) with ID 'btnLight'
is clicked
*/
var btnLight = document.getElementById('btnLight');

btnLight.addEventListener('click', function(){

    document.body.style.backgroundColor = 'springgreen';
    console.log('light mode activado');
})


var name = 'Pedro';
var idade = 10;

const pi = 3;
const code = 'true'

let nick = 'PA';


