let contador = 0

setInterval(() => {
    ++contador
    process.send({contador})
}, 1000)

process.on('message', msg => {
    console.log(`Msg from dad ` + JSON.stringify(msg));
    process.send({mensaje: 'Noooooooooo'})
})