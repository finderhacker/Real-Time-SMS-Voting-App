Real-Time-SMS-Voting-App
========================

Example of a real time sms voting web app, using background jobs, sms and push notifications.

We are using the following services:
1. SMS messages with TelAPI http://www.telapi.com
2. Background jobs with http://iron.io

Installation
------------
1. `npm install`
2. `gem install`
3. Change the file `.env.example` to `.env`

Upload Worker to iron.io
------------
`cd tasks`
`iron_worker upload vote`

http://conpanna.net