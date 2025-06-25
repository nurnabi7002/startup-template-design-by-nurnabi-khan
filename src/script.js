console.log("Start UP - Nur Nabi Khan");


// Side Bar
function openMenu() {
    document.getElementById("menu").style.display = 'block'
    document.getElementById("nav-btn").style.display = 'none'
    document.getElementById("menu-btn").style.display = 'block'

}


function closeMenu() {
    document.getElementById("menu").style.display = 'none'
    document.getElementById("nav-btn").style.display = 'block'
    document.getElementById("menu-btn").style.display = 'none'
}




// Nav Link Slid Effect

// Hoe it work
document.getElementById("hit-btn").addEventListener("click", function () {
  document.getElementById("hit").scrollIntoView({ behavior: "smooth" });
});

// Feature
document.getElementById("ft-btn").addEventListener("click", function () {
  document.getElementById("ft").scrollIntoView({ behavior: "smooth" });
});

// Pricing
document.getElementById("pr-btn").addEventListener("click", function () {
  document.getElementById("pr").scrollIntoView({ behavior: "smooth" });
});






