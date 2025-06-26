const btn = document.getElementById("vid")
console.log(btn)
const contad = document.getElementById("Counter")
console.log(contad)


let i = 0

function addCounter() {
     i++;

    contad.innerHTML=i;
    console.log("meclickeastes");


}



btn.addEventListener("click",addCounter )