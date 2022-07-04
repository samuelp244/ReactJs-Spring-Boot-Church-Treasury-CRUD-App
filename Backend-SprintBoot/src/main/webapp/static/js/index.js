const offeringsBtn = document.getElementsByClassName("offerings-btn")[0];
const expensesBtn = document.getElementsByClassName("expenses-btn")[0];
const splofferingsBtn = document.getElementsByClassName("splofferings-btn")[0];
//const backBtn = document.getElementsByClassName("back-btn")[0];

offeringsBtn.addEventListener("click", ()=>{
    window.location.href = "/offerings";
});

expensesBtn.addEventListener("click", ()=>{
    window.location.href = "/expenses";
});

splofferingsBtn.addEventListener("click", ()=>{
    window.location.href = "/splofferings";
});





