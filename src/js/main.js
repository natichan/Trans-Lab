const btn = document.getElementById('buttonSaldo')

btn.addEventListener('click', getBipSaldo = () => {
    let idTarjeta = document.getElementById('saldoBip').value
    url=`http://www.psep.cl/api/Bip.php?&numberBip=${idTarjeta}` ;
    fetch(url)
        .then(response => response.json()
        ).then(data => {
        let dataBip = Object.values(data)
        let resultTarjeta = dataBip[2];
        dataBip[2] =document.getElementById('saldoBip').value;
        document.getElementById('resultado').innerHTML= resultTarjeta;
    })
})