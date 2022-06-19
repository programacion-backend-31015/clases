const fs = require('fs')

const datetime = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`

fs.writeFileSync('fyh.txt', datetime)