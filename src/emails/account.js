const sgMail = require('@sendgrid/mail')
// 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
//const sendgridAPIKey = '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'
//sgMail.setApiKey(sendgridAPIKey)

sgMail.setApiKey(process.env.SENDGRID_API_KEY)



const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kencywen@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kencywen@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}