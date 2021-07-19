document.addEventListener('DOMContentLoaded', function() {
   let btnSide = document.querySelector("#btn-side");
   btnSide.addEventListener('click',hide);

   window.addEventListener('click', function(e){
        let btnSide = document.querySelector("#btn-side");
        let imgSide = document.querySelector("#img-side");
        if (e.target.nodeName != 'A' && e.target != imgSide && e.target != btnSide){
            // console.log('before: ',document.querySelector("#sidebar").classList.value);
            if(!sidebar.classList.contains('hide')){
                sidebar.classList.add('hide')
            }
            // console.log('after: ',document.querySelector("#sidebar").classList.value);
        } 
    })
});

function hide() {
    let sidebar = document.querySelector("#sidebar");
    // sidebar.classList.toggle("hide");
    if(sidebar.classList.contains('hide')){
        sidebar.classList.remove('hide');
    } else {
        sidebar.classList.add('hide');
    }
}