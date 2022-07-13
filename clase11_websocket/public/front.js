let username = sessionStorage.getItem('username')
if (!username) {
    username = prompt('Insert username')
    sessionStorage.setItem("username", username)
}

document.getElementById('username').innerHTML = username

const socket = io()

const btn = document.getElementById('btn')
btn.onclick = () => {
    let txt = document.getElementById('mensaje').value
    txt = `[${username}]: ${txt}`
    socket.emit('notificacion', txt)
}

const div = document.getElementById('mensajes')
socket.on('mensaje', data => {
    div.innerHTML = div.innerHTML + "<br>" + data
})
