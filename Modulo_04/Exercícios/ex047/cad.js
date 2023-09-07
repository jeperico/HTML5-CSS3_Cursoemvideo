
function clicou(){
    const iname = document.getElementById('name');
    const name = iname.value;
    const isob = document.querySelector('#sob');
    const sob = isob.value;
    const ipass = document.querySelector('#pass');
    const pass = ipass.value;
    const div = document.querySelector('#res');
div.innerHTML= `Olá ${name} ${sob}, sua senha é ${pass}`;
}