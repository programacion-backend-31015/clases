// Configurar username
let username = sessionStorage.getItem('username')
if(username == null) {
    username = prompt('Insert username')
    sessionStorage.setItem('username', username)
}

document.getElementById('username').innerHTML = `Welcome ${username}`
const socket = io()
loadFirstData()

// Configuramos el envio de mensajes
const btnSend = document.getElementById('send')
btnSend.onclick = e => {
    e.preventDefault()
    const msn = document.getElementById('msn').value
    socket.emit('chat-in', {msn, username})
}

socket.on('chat-out', data => {
    addDataToDiv(data)
})

// Muestra en la pagina un solo mensaje
function addDataToDiv(data) {
    const div = document.getElementById('chat')
    div.innerHTML += `<br>[${data.date}] <b>${data.username}</b>: <i>${data.msn}</i>`
}

// Recupera todos los mensajes a la pagina
function loadDataToDiv(data) {
    console.log(data);
    data.forEach(d => addDataToDiv(d))
}


// Para cargar la data por primera vez
function loadFirstData() {
    fetch('/data')
        .then(data => data.json())
        .then(d => {
            loadDataToDiv(d.data)
        })
        .catch(e => alert(e))
}