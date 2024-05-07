var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function showtab(tabname) {
    for (var i of tablinks) {
       i.classList.remove("active-link");
    }
    for (var i of tabcontents) {
        i.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}



// /*------------sidenavbar-container------------*/
// var sidenavbar=document.getElementsByClassName(".sidecontent-container")[0]
// function shownavbar(){
//     if( sidenavbar.style.display =="none"){
//         sidenavbar.style.display = "block";
//     }
//     else{
//         sidenavbar.style.display = "none";
//     }
// }

var sidenavbar = document.getElementsByClassName("sidecontent-container")[0];
function shownavbar() {
    sidenavbar.style.left="0px";
}
function closenavbar(){
    sidenavbar.style.left="-80%";
}


