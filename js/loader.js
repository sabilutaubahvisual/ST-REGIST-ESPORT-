/* ===========================================
   SABILU TAUBAH ESPORT
   LOADER
=========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    document.body.style.overflow = "hidden";

    document.body.classList.add("loaded");

    setTimeout(() => {

        loader.classList.add("hide");

        document.body.style.overflow = "";

        setTimeout(() => {

            loader.remove();

        },800);

    },4500);

});