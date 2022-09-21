

console.log("Directorio actual:", process.cwd())
console.log("ID del proceso:", process.pid)
console.log(process.version);
console.log(process.title);
console.log(process.platform);
console.log(process.memoryUsage());

process.on('beforeExit', code => {
    console.log('Process beforeExit event with code:', code);
})
process.on('exit', code => {
    console.log('Process exit event with code:', code);
})


process.exit()

console.log("Este es mi log");