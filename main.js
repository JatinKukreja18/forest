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
// animation function
function scrollToSection(el) {
    item = document.querySelector(el)
    
    var diff=(item.offsetTop-window.scrollY)/20;
    if(!window._lastDiff){
        window._lastDiff = 0;
    }

    console.log('test')

    if (Math.abs(diff)>2) {
        window.scrollTo(0, (window.scrollY+diff))
        clearTimeout(window._TO)

        if(diff !== window._lastDiff){
            window._lastDiff = diff;
            window._TO=setTimeout(scrollToSection, 15, el);
        }
    } else {
        console.timeEnd('test');
        window.scrollTo(0, item.offsetTop)
    }
}
document.addEventListener("scroll", onScroll);
