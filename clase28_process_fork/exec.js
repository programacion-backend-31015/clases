const { exec } = require('child_process')

exec('ls -lh', (error, stdout, stderror) => {
    if(error) {
        console.log(`error ${error}`);
    }

    if(stderror) {
        console.log(`error ${stderror}`);
    }

    console.log(stdout);
})