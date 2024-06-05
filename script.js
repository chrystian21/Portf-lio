const itemsNav = document.getElementById("itemsNav")
const menu = document.getElementById("burguer")
const nav = document.querySelector(".nav")


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

var lastScrollTop = 0;

window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scroll está indo para baixo
        console.log("Scroll para baixo");
        nav.classList.add("hidden")
        
    } else {
        // Scroll está indo para cima ou parado
        console.log("Scroll para cima ou parado");
        nav.classList.remove("hidden")
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para dispositivos móveis
}, false);

menuR()
setInterval (menuR, 10)

