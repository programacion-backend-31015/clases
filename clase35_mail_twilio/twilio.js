 const twilio = require('twilio')

 const SID = 'AC2e2a8660adede115f63ddca901e5ade8'
 const token = '7eb29c2549f19c1864eec463418f1960'

 const client = twilio(SID, token)

 client.messages.create({
    body: 'Saludos a Manuel!!',
    from: '+12676514549',
    to: '+573163386191'
 })
    .then(r => console.log(r))
    .catch(e => console.error(e))