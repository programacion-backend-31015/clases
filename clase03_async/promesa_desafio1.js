
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 2500)
})
    .then(r => {
        console.log(r)
        return r * 2
    })
    .then(r => {
        console.log(r)
        return r * 3
    })
    .then(result => {
        console.log(result)
        return result + 45
    })
















    