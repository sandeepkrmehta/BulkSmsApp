const accountSid = 'AC963a808d8b2265aca9b0f340980fc691';
const authToken = 'bda099d4a801917efb102bd022d3f894';
const client = require('twilio')(accountSid, authToken);

const phoneNumbers = ['7222976619','7089879563','7261048972','9098569052','7067612077','8349138566']

phoneNumbers.forEach(element => {
  client.messages
    .create({
        body: `We are sending this message to ${element}`,
        from: '+12568125450',
        to: `+91${element}`
    })
    .then(message => console.log(message.sid))
    .catch(error => console.error(error));
});

