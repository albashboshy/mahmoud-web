let count = document.querySelectorAll(".stats .number");

count.forEach(element => {
    
    element.addEventListener("mouseover", () => {
    element.innerHTML = 1;
     let increase =setInterval(() => {
         element.textContent++;
        if(element.textContent == element.dataset.num){
            clearInterval(increase);
        }
         element.addEventListener("mouseout", () => {
        clearInterval(increase);
        
        element.innerHTML =`${element.dataset.num}`;
    })
        
     },5);
    })
   
});