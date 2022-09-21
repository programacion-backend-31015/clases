const { execFile } = require('child_process')

execFile(__dirname + '/bash.sh', (err, out, stderror) => {
    if(err) console.log(err);
    if(stderror) console.log(stderror);

    console.log(out);
})