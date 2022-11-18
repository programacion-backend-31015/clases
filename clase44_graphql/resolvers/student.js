const uuid = require('uuid')

class Student {
    constructor(id, { name, age }) {
        this.id = id
        this.name = name
        this.age = age
    }
}

const DB = {}

function getStudent({ id }) {
    if (!DB[id]) {
        throw new Error('Student not found')
    }

    return DB[id]
}

function getStudents({ field, value }) {
    const students = Object.values(DB)
    if (field && valor) return students.filter(s => s[field] == value)

    return students
}

function createStudent({ data }) {
    const id = uuid.v1()
    const newStudent = new Student(id, data)

    DB[id] = newStudent

    return newStudent
}

function updateStudent(id, { data }) {
    if (!DB[id]) {
        throw new Error('Student not found')
    }

    const studentUpdated = new Student(id, data)
    DB[id] = studentUpdated

    return studentUpdated
}

function deleteStudent(id) {
    if (!DB[id]) {
        throw new Error('Student not found')
    }

    const studentDeleted = DB[id]
    delete DB[id]

    return studentDeleted
}

module.exports = {
    getStudent,
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
}