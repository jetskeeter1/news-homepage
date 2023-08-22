    let openmen = document.getElementById("openmenu");
    let closemen = document.getElementById("closemenu");
    let nav = document.getElementById("mynav");
    let shadow = document.getElementById("backshadow");

    openmen.addEventListener("click", ()=>{
        nav.classList.add("openthis");
        shadow.classList.add("full-mobile");
        document.body.style.overflow='hidden'
    });
    
    closemen.addEventListener("click", ()=>{
        nav.classList.remove("openthis");
        shadow.classList.remove("full-mobile");
        document.body.style.overflow='visible'
    });