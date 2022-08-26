const { normalize, denormalize, schema } = require('normalizr');
const fs = require('fs')
const holding = require('./holding')
const util = require('util')


const personaSchema = new schema.Entity('persona')
const empresaSchema = new schema.Entity('empresa', {
    encargado: personaSchema,
    gerente: personaSchema,
    empleados: [personaSchema]
})
const holdingSchema = new schema.Entity('holding', {
    empresas: [empresaSchema]
})

const dataNormalized = normalize(holding, holdingSchema)
fs.writeFile('./holdingNormalized.json', JSON.stringify(dataNormalized), e => {
    console.log('Data noormalized and exported');    
})

const dataDesnormalized = denormalize(
    dataNormalized.result,
    holdingSchema,
    dataNormalized.entities
)
console.log(util.inspect(dataDesnormalized, false, 12, true));