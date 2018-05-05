function toggleMenu(){
        if(document.getElementById("menu").className == ""){
            document.getElementById("menu").className = "active";   
        }
        else{
            document.getElementById("menu").className = ""   
        }

        if(document.getElementById("menu-modal").className == "menu-modal"){
            document.getElementById("menu-modal").className = "menu-modal active"   
        }
        else{
            document.getElementById("menu-modal").className = "menu-modal"               
        }
    }

function onScroll(e) {
    if(window.pageYOffset >= document.getElementById("intro").offsetTop){
        document.getElementById("header").className = "f-header active";
    }else{
        document.getElementById("header").className = "f-header";        
    }
    
}
function scrollToSection(el) {
    console.log(el);
    
    element = document.querySelector(el)
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
}
document.addEventListener("scroll", onScroll);
