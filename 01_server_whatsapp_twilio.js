const twilio = require('twilio')

const accountSid = '*******************************';
const authToken = '*******************************';

const client = twilio(accountSid , authToken)

const options = {
  body: "Holas soy un WSP desde Node.js",
  mediaUrl: [ "https://static3.primiciasya.com/adjuntos/208/imagenes/016/756/0016756943-320x327.jpg" ],
  from: 'whatsapp:+14155238886',
  to: 'whatsapp:+5491155633083'
}
const sendMessage = async () => {
  try{
    const message = await client.messages.create(options)
    console.log(message);
  }
  catch (err)
  {
    console.error(err);
  } 
}

sendMessage()
