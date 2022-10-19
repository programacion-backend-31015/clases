const { createTransport } = require('nodemailer')
const ejs = require('ejs')

const mail = 'arturo.verbel@gmail.com'
const mail_to = process.argv[2] || mail

const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: mail,
        pass: 'xuaboahjvxtususr'
    }
});

const data = 'My data from Regina de la Cruz'

// Volvemos a las 22:17 arg

ejs.renderFile('index.html.ejs', { data })
    .then(body => {
        transporter.sendMail({
            from: mail,
            to: [mail_to],
            subject: 'Correo de Vanessa',
            html: body,
            attachments: [ {path: 'r2d2.jpg'}]
        })
            .then(r => console.log(r))
            .catch(e => console.error(e))
    })


