const erbil =document.getElementById("erbil");
const erbil_detail =document.getElementById("erbil_detail");
const suli_detail =document.getElementById("suli_detail");
const duhok_detail =document.getElementById("duhok_detail");
const suli =document.getElementById("suli");
const duhok =document.getElementById("duhok");

  erbil.addEventListener('click', () => {
    erbil_detail.style.transition="all 1s";
    erbil_detail.style.display="flex";
    suli_detail.style.display="none";
    duhok_detail.style.display="none";
    
  })
  suli.addEventListener('click', () => {
    erbil_detail.style.transition="all 1s";
    erbil_detail.style.display="none";
    suli_detail.style.display="flex";
    duhok_detail.style.display="none";
  })
  duhok.addEventListener('click', () => {
    erbil_detail.style.transition="all 1s";
    suli_detail.style.display="none";
    erbil_detail.style.display="none";
    duhok_detail.style.display="flex";
  })

 
 
 
