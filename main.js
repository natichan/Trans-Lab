const btn = document.getElementById("verSaldo");
const inputText = document.getElementById("bip")
const containerTitle = document.getElementById("saldoBip")

// probando con click, sale solo, undefined
inputText.addEventListener("click", (event) => {
   if (event) {
       let idTarjeta = inputText.value;    
       inputText.value = ""; 
       fetch('http://bip.franciscocapone.com/api/getSaldo/{idTarjeta}')
       .then(response => response.json)
            .then(data => {
               renderInfo(data);
           })
    return idTarjeta
   }

})

const renderInfo = data => {
       containerTitle.innerHTML = data.saldoBip; 
      }