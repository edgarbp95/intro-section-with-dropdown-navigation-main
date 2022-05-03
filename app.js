const openFeaturesDesktop = document.getElementById("open-features-desktop");
const openCompanyDesktop = document.getElementById("open-company-desktop");
const openFeaturesMobile = document.getElementById("open-features-mobile");
const openCompanyMobile = document.getElementById("open-company-mobile");
const modalFeaturesDesktop = document.getElementById("open-features");
const modalCompanyDesktop = document.getElementById("open-company");

const menuHamburguesa = document.querySelector(".menu_hamburguesa");
const modalMenu = document.querySelector(".modal_menu");
const closeModalMenu = document.querySelector(".icon_close_menu");
const modalFeaturesMobile = document.querySelector(".open_features_mobile");
const modalCompanyMobile = document.querySelector(".open_company_mobile");



let stateFeaturesDesk = false;
let stateCompanyDesk = false;
let stateFeaturesMob= false;
let stateCompanyMob = false;

openFeaturesDesktop.addEventListener("click",()=>{
    if(!stateFeaturesDesk){
        modalFeaturesDesktop.style.display="flex";
        modalFeaturesDesktop.style.animation="aparecer 0.4s forwards"
        stateFeaturesDesk=true;
        document.getElementById("slide_features_desktop").src="./images/icon-arrow-up.svg";
        
    } else{
        modalFeaturesDesktop.style.display="none";
        document.getElementById("slide_features_desktop").src="./images/icon-arrow-down.svg";
        stateFeaturesDesk=false;
    }
    
})

openCompanyDesktop.addEventListener("click",()=>{
    if(!stateCompanyDesk){
        modalCompanyDesktop.style.display="flex";
        modalCompanyDesktop.style.animation="aparecer 0.4s forwards";
        document.getElementById("slide_company_desktop").src="./images/icon-arrow-up.svg";
        stateCompanyDesk=true;
    } else{
        modalCompanyDesktop.style.display="none";
        document.getElementById("slide_company_desktop").src="./images/icon-arrow-down.svg";
        stateCompanyDesk=false;
    }
    
})

menuHamburguesa.addEventListener("click",()=>{
    modalMenu.style.display="flex";
    modalMenu.style.animation="aparecer 0.4s forwards";
})

closeModalMenu.addEventListener("click",()=>{
    // modalMenu.style.display="none";
    modalMenu.style.animation="desaparecer 0.5s forwards"
    setTimeout(()=>{
        modalMenu.style.display="none"
    },500)
})

openFeaturesMobile.addEventListener("click",()=>{
    if(!stateFeaturesMob){
        modalFeaturesMobile.style.display="flex";
        modalFeaturesMobile.style.animation="aparecer 0.3s forwards";
        document.getElementById("slide_features_mobile").src="./images/icon-arrow-up.svg";
        stateFeaturesMob=true;
    } else{
        // modalFeaturesMobile.style.display="none";
        modalFeaturesMobile.style.animation="desaparecer 0.3s forwards"
        setTimeout(()=>{
            modalFeaturesMobile.style.display="none"
        },200)
        document.getElementById("slide_features_mobile").src="./images/icon-arrow-down.svg";
        stateFeaturesMob=false;
    }
})

openCompanyMobile.addEventListener("click",()=>{
    if(!stateCompanyMob){
        modalCompanyMobile.style.display="flex";
        modalCompanyMobile.style.animation="aparecer 0.3s forwards";
        stateCompanyMob=true;
        document.getElementById("slide_company_mobile").src="./images/icon-arrow-up.svg";
    } else{
        // modalCompanyMobile.style.display="none";
        stateCompanyMob=false;
        modalCompanyMobile.style.animation="desaparecer 0.3s forwards"
        setTimeout(()=>{
            modalCompanyMobile.style.display="none"
        },200)
        document.getElementById("slide_company_mobile").src="./images/icon-arrow-down.svg";
    }
})