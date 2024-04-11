const itemsNav = document.getElementById("itemsNav")
const menu = document.getElementById("burguer")

function clickMenu() {


if(itemsNav.style.display == "block"){
    itemsNav.style.display = "none";
    menu.textContent = "menu"    
}else{
itemsNav.style.display = "block";
menu.textContent = "close"
} 

}

function menuR(){
    if(window.innerWidth < 785) {
        burguer.style.display = "block"
        itemsNav.classList.add("hidden")
    } else {
        burguer.style.display = "none"
        itemsNav.classList.remove("hidden")
    }
}

menuR()
setInterval (menuR, 10)

