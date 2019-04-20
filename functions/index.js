const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const twilio = require('twilio');

const appName        = functions.config().appname;
const accountSid     = functions.config().twilio.sid;
const authToken      = functions.config().twilio.token;
const smsToNumbers   = functions.config().sms.tonumbers;
const twilioNumber   = functions.config().sms.fromnumber;

const client = new twilio(accountSid, authToken);

function sendSMS(textMessage) {
  client.messages.create(textMessage)
  .then(message => console.log(message, 'success'))
  .catch(err => console.log(err));
}

exports.sendNewUserText = functions.auth.user().onCreate((user) => {
  const displayName = user.displayName;
  const smsToNumbersList = smsToNumbers.split(',');

  // Each number to send an SMS
  for (var i = 0; i < smsToNumbersList.length; i++) {
    const textMessage = {
      body: `[${appName}] New User: ${displayName}!`,
      to: smsToNumbersList[i],
      from: twilioNumber
    }

    sendSMS(textMessage);
  }
});
