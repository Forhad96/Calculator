// (function(){
//     let screen = document.querySelector(".screen");
//     let buttons = document.querySelectorAll(".btn");
//     let clear = document.querySelector(".btn_clear");
//     let equal = document.querySelector(".btn_equal");

//     buttons.forEach(function(button){
//         button.addEventListener('click', function(e){
//             let value = e.target.dataset.num;
//             screen.value += value;
//         })
//     });

//     equal.addEventListener('click',function(e){
//         let s = document.querySelector('.screen')
//         if(s.value === '') {
//             s.value = '';
//         } else{
//             let ans = eval(s.value);
//             s.value = `${ans}`;
//         }
//     })

// })();

let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn_clear");
let equl = document.querySelector(".btn_equal");


// funtion for display show 

const displayNum = (e) =>{
    let value = e.target.dataset.num;
    screen.value += value
}

buttons.forEach(function(button){
    button.addEventListener('click', displayNum)
});
// function for opartion
function oparation(e){
    if(screen.value === ''){
        screen.value = 'please input value';
    } else{
        let ans = eval(screen.value);
        screen.value = ans;
    }
}

equl.addEventListener('click',oparation);
// clear function
clear.addEventListener('click',() =>{
    screen.value = '';
})

