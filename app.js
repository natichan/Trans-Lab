//Sidenav
$(document).ready(function(){
  $('.sidenav').sidenav();
});

function saveUserPassword() { //funcion para guardar comentario
  //validación inputs, usamos if para que no se imprima un mensaje vacío
  document.getElementById('buttonValidate').addEventListener('click', function Redirect() {
  if((document.getElementById('identity').value === '') || (document.getElementById('password').value === '')) {
    alert('no puedes dejar campos vacíos') 
  } else {
    (document.getElementById('identity').value === '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') || (document.getElementById('password').value === '[0-9]{8}')
    let email = document.getElementById('identity').value;
    let password = document.getElementById('password').value;
    localStorage.setItem(email, password); //En este punto guardo nombre y comment en mi local storage 
    window.location="file:///home/laboratoria/Documents/Laboratoria/Proyectos/TransLab/index3ObSaldo.html";
    }
  })
}
saveUserPassword();
