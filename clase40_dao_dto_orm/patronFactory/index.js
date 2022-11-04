
class Employee {
    constructor(name) {
        this.name = name
        this.type = ""
    }

    speak() {
        console.log(`Hii, my name is ${this.name} and my type ${this.type}`);
    }
}

class FullTimeEmployee extends Employee {
    constructor(name) {
        super(name) 
        this.type = 'full-time'
    }
}

class PartTimeEmployee extends Employee {
    constructor(name) {
        super(name) 
        this.type = 'part-time'
    }
}

class ContractorEmployee extends Employee {
    constructor(name) {
        super(name) 
        this.type = 'contractor'
    }
}

class MyEmployeeFactory {
    createEmployee(data) {
        if(data.type == 'full') return new FullTimeEmployee(data.name)
        if(data.type == 'part') return new PartTimeEmployee(data.name)
        if(data.type == 'contractor') return new ContractorEmployee(data.name)
    }
}

const factory = new MyEmployeeFactory()

const types = [
    {type: 'full', name: 'gonzalo'},
    {type: 'full', name: 'Miguel'},
    {type: 'full', name: 'Gabriel'},
    {type: 'part', name: 'Alexander'},
    {type: 'part', name: 'Regina'},
    {type: 'contractor', name: 'R2'},
]

const employees = []
types.forEach(type => employees.push(factory.createEmployee(type)))

console.log(employees);
employees.forEach(e => e.speak())