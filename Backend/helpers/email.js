const transport = require('../config/email.js')
const nodemailer = require('nodemailer')
const emailRegistro = async (datos) => {
    const { correo, nombre, token } = datos;

    

    // Información del email
    const info = await transport.sendMail({
        from: '"KAPEKSHOP - Registro usuario" <registro@kapekshop.com>',
        to: correo,
        subject: "KAPEKSHOP - Confirma Tu Cuenta",
        html: `
            <p>Hola ${nombre}, comprueba tu cuenta en KAPEKSHOP</P>
            <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:</P>
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}" >Comprobar Cuenta</a>
            <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
        `
    })
}
module.exports = emailRegistro;