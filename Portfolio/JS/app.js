let navbar = document.getElementById("NavStyle")
let sticky = navbar.offsetTop; 

window.addEventListener("scroll", () => {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("scroll");
        contact_column = document.getElementById("contact-column")
    }
    else{
        navbar.classList.remove("scroll");
    }
})



let menu_status = "close";

function mobile_menu(){
    const mobile_menu = document.getElementById("mobile-nav");
    const menu_content = document.getElementById("mobile-content")
    const icon_menu_close = document.getElementById("menu-icon-close");
    const icon_menu_open = document.getElementById("menu-icon");
    
    if (menu_status == "close"){
        mobile_menu.style.width = "70%";
        icon_menu_close.style.display = "block";
        icon_menu_open.style.display = "none";
        menu_content.style.display = "block";
        $("body").css("overflow-y", "hidden");
        menu_status = "open";
    }
    else{
        mobile_menu.style.width = "0%";
        menu_content.style.display = "none"
        icon_menu_open.style.display = "block";
        icon_menu_close.style.display = "none";
        $("body").css("overflow-y", "auto");
        menu_status = "close";
    }
}

setTimeout(function(){
    $('#loader-wrapper').fadeToggle();}, 200);


