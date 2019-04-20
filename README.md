# Firebase User Create Notifier

Sends SMS notifications to a specific set of numbers on a new user create trigger from Firebase.

A fun way to be notified as you are building your customer base on new users trying out your application.

Built for [recruitapp.io](https://recruitapp.io/) where we are building the perfect tool to help you get your dream job.

Similar projects:
- MixPanel New User Notifierator: [mixpanel-to-woof-notifierator](https://github.com/drewrothstein/mixpanel-to-woof-notifierator)

## Overview Diagram

![overview diagram](https://github.com/drewrothstein/firebase-create-notifier/raw/master/errata/diagram.png)

## Dashboard in Firebase

![dashboard](https://github.com/drewrothstein/firebase-create-notifier/raw/master/errata/functions_dashboard.png)

## Authentication in Firebase

![authentication](https://github.com/drewrothstein/firebase-create-notifier/raw/master/errata/functions_authentication_01.png)

## Logs in Firebase

![logs](https://github.com/drewrothstein/firebase-create-notifier/raw/master/errata/functions_logs_01.png)

## What does it do?

Notifies a configured set of numbers via SMS when a new user is created in Firebase.

## Where does this run?

This runs as a Firebase Function Trigger ([doc](https://firebase.google.com/docs/functions/)).

## How does it work?

When `user.create` is triggered in Firebase this function is called.

## Dependencies

See `functions/package.json`.

## Prerequisites

### Accounts

1. Twilio Account (upgraded) + Account SID & Auth Token.
2. Firebase Account.

### System

1. Node.js + NPM.
2. Firebase Tools (`npm install -g firebase-tools`).

## Configuration

### Overview

Configuration is done and stored with the `firebase` CLI which is installed from `firebase-tools`.

To fetch all of the configuration for a given function, run: `firebase functions:config:get`.

This will dump out, as JSON, all of your configuration.

To set configuration for a given function, run `firebase functions:config:set foo.bar="bez"`

### This Function

For this function you will need to set four configuration values:
```
appName
sms.tonumbers
sms.fromnumber
twilio.sid
twilio.token
```

To do this, run:
```
firebase functions:config:set appName="My Cool App"
firebase functions:config:set sms.tonumbers="+1...,+1..."
```

filling in the ellipses with the appropriate numbers.

And continue for the remaining three configurations.

## Building

There is nothing to build.

## Local Development

You can configure local development by following the guide [here](https://firebase.google.com/docs/functions/local-emulator).

## Deploying

Deployment is extremely simple:
```
$ firebase deploy --only functions
```

This will produce output that looks similar to this:

![deployment output](https://github.com/drewrothstein/firebase-create-notifier/raw/master/errata/deployment_output.png)

## Testing

No unit tests at this time.

## Logging

As pictured above you can view the logs from runs in the Firebase console.

## Cost & Limits

### Firebase

At the time of writing you can use 125K/month invocations for free under the Spark plan.
This also includes 40K/month of GB-seconds and CPU-seconds.

For full pricing details you will want to review [https://firebase.google.com/pricing/](https://firebase.google.com/pricing/).

For the various quotas and limits associated with Firebase Functions you will want to review [https://firebase.google.com/docs/functions/quotas](https://firebase.google.com/docs/functions/quotas).

### Twilio

Twilio costs money.  At the time of writing it is $1/month for a phone number and $0.0075/SMS.

For full pricing details you will want to review [https://www.twilio.com/sms/pricing/us](https://www.twilio.com/sms/pricing/us) (for US pricing).

For the various limits associated with Twilio you will want to review the post [here](https://support.twilio.com/hc/en-us/articles/115002943027-Understanding-Twilio-Rate-Limits-and-Message-Queues).

## Pull Requests

Sure, but please give me some time.

## License

Apache 2.0.
