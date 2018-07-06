//Sidenav
$(document).ready(function(){
  $('.sidenav').sidenav();
});

let valEmail = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';
let valPass = '[0-9]{8}';

saveUserPassword = () => { //funcion para guardar comentario
  //validación inputs, usamos if para que no se imprima un mensaje vacío
  document.getElementById('buttonValidate').addEventListener('click', redirect = () => {
  if((document.getElementById('identity').value === '') || (document.getElementById('password').value === '')) {
    alert('no puedes dejar campos vacíos') 
  } else {
    let email = document.getElementById('identity').value;
    let password = document.getElementById('password').value;
    localStorage.setItem(email, password); //En este punto guardo nombre y comment en mi local storage 
    window.location="file:///home/laboratoria/Documents/Laboratoria/Proyectos/TransLab/index3ObSaldo.html";
    } 
  })
}
saveUserPassword();
