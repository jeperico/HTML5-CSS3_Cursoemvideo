
function Menu(){
    const Menu = document.querySelector('#Menu');
    
    if(Menu.style.display == 'block'){
        Menu.style.display= 'none';
    }else{
        Menu.style.display= 'block';
    }
}

function Size(){
    const Menu = document.querySelector('#Menu');
    
    if(window.innerWidth >= 768){
        Menu.style.display= 'block';
    }else{
        Menu.style.display= 'none';
    }
}