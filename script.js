let btn = document.querySelector("button");
let popup = document.querySelector(".popup");
let modelContainer = document.querySelector("#model-container");
let icon = document.querySelector(".icon");
btn.addEventListener("click",function(){
    modelContainer.style.display = "block";
})

icon.addEventListener("click",function(){
    modelContainer.style.display = "none";
})