let aside = document.getElementById("aside");
function menu() {
    aside.classList.toggle("actiive");
};
let searchInput = document.getElementById("search");
let right = document.getElementById("right");
let searchIcon = document.getElementById("searchIcon");
function search(){
    searchInput.style.cssText="display:flex;width:100%";
    right.style.display="none";
    searchIcon.style.display="none";
}