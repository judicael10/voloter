const text = document.querySelector(".second-text");

const textloand = () =>{
    setTimeout(() => {
        text.textContent = "pw-piont ";
    },0);
    setTimeout(() => {
        text.textContent = "word";
    },4000);

    setTimeout(() => {
        text.textContent = "excel";
    },8000);

    
}
textloand();
setInterval(textloand,120000)




