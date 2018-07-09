// redireccionar saldo bip sidenav
$(document).ready(function(){
    $('.sidenav').sidenav();
    // redireccionar a ver saldo
    document.getElementById('seeMoney').addEventListener('click', redirectMoney = () => {
        window.location="file:///home/laboratoria/Documents/Laboratoria/Proyectos/TransLab/src/index3ObSaldo.html";
        });
});

// redireccionar saldo bip boton central
const buttonGoTo = document.getElementById('goToSaldo');

buttonGoTo.addEventListener('click', redirectSaldo = () => {
    window.location="file:///home/laboratoria/Documents/Laboratoria/Proyectos/TransLab/src/index3ObSaldo.html";
    });
    