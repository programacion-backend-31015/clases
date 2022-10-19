const { createTransport } = require('nodemailer')

const mail = 'domenick84@ethereal.email'

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'domenick84@ethereal.email',
        pass: 'X7kYGKnsjQsQhPnW6X'
    }
});

const mailOptions = {
    from: 'Server Node JS',
    to: mail,
    subject: 'Mail de prueba desde Node',
    html: `
        <h1 style="color: blue;">Contenido de Nicolas Di. Y saludos para los Tutores !! </h1>
    `
}

transporter.sendMail(mailOptions)
    .then(r => console.log(r))
    .catch(e => console.error(e))