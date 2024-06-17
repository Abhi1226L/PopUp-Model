let btn = document.querySelector("button");
let popup = document.querySelector(".popup");
let icon = document.querySelector(".icon");
btn.addEventListener("click",function(){
    popup.style.display = "block";
})

icon.addEventListener("click",function(){
    popup.style.display = "none";
})