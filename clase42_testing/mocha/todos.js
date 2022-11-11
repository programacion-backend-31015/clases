const fs = require('fs')

class Todos {

    constructor() {
        this.todos = []
    }

    list() { return this.todos }
    add(title) {
        this.todos.push({title, complete: false})
    }

    complete(title) {
        if(this.todos.length < 1) throw new Error ('There are not todos')

        let found = false
        this.todos.forEach(todo => {
            if(todo.title === title) {
                todo.complete = true
                found = true
                return
            }
        })

        if(!found) throw new Error('todo not found')

        return true
    }

    saveToFilePromise() {
        let fileContets = ''
        this.todos.forEach(todo => {
            fileContets += `${todo.title}, ${todo.complete}\n`
        })

        return fs.promises.writeFile('todos.txt', fileContets)
    }

}

module.exports = Todos