let navbar = document.querySelector(".navbar")
let sticky = navbar.offsetTop; 

window.addEventListener("scroll", () => {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("scroll");
    }
    else{
        navbar.classList.remove("scroll");
    }
})




let menu_status = "close";

function mobile_menu(){
    let mobile_menu = document.querySelector(".mobile-nav");
    let menu_content = document.querySelector(".mobile-content")
    let icon_menu_close = document.querySelector(".menu-icon-close");
    let icon_menu_open = document.querySelector(".menu-icon");
    
    if (menu_status == "close"){
        mobile_menu.style.display = "flex";
        icon_menu_close.style.display = "block";
        $("body").css("overflow-y", "hidden");
        menu_status = "open";
    }
    else{
        mobile_menu.style.display = "none";
        icon_menu_open.style.display = "block";
        icon_menu_close.style.display = "none";
        $("body").css("overflow-y", "auto");
        menu_status = "close";
    }
}

setTimeout(function(){
    $('.loading-wrap').fadeToggle();}, 200);


