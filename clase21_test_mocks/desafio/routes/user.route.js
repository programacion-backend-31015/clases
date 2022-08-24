const express = require('express')
const ApiUserMock = require('../api/users.api')

class UserRouter extends express.Router {
    constructor() {
        super()

        const apiUsers = new ApiUserMock()

        this.post('/populate', (req, res) => {
            const cant = Number(req.query.cant) || 5
            const users = apiUsers.populate(cant)

            res.json(users)
        })

        this.get('/', (req, res) => {
            res.json(apiUsers.getAll())
        })

        this.get('/:id', (req, res) => {
            res.json(apiUsers.get(req.params.id))
        })

    }

}

module.exports = UserRouter