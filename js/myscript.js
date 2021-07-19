document.addEventListener('DOMContentLoaded', function() {
   
   let btnSide = document.querySelector("#btn-side");
   btnSide.addEventListener('click',saludo);
});


function show() {
    let sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("show");
}

function hide() {
    let sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("show");
}