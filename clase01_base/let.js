let i = 0

function foo() {
    i = 1
    let j = 2
    if(true) {
        console.log(i)
        console.log(j)
    }
}

foo()