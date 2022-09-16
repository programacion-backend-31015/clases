console.log('Mi programa de Node. Mio, no tuyo');

console.log(process.argv);

for (let i = 0; i < process.argv.length; i++) {
    console.log(`${i} -> ${process.argv[i]}`);
}

const port = process.argv[2] || 8080
console.log(`The port is ${port}`);