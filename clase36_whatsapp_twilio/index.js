const accountSID = "AC2e2a8660adede115f63ddca901e5ade8"
const authToken = "58fc0169d014d3b93baeab12ae913ce7"
const client = require('twilio')(accountSID, authToken)

client.messages.create({
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+573163386191',
    body: 'Hola R2 soy el bot from NODE JS'
})
    .then(message => console.log(message))
    .catch(e => console.log(e))

/**
 * 
 * /product?product=3;DELETE ALL;
 * 
 * SELECT * FROM products where id = 3;DELETE ALL;  ;
 * 
 * 
 */