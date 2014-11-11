Real-Time-SMS-Voting-App
========================

Example of a real time sms voting web app, using background jobs, sms and push notifications.

!["Real-Time SMS Voting APP"](https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10385405_837843609611670_6629057078725331984_n.jpg?oh=604e57cef636f292968563e6d016479b&oe=54D5A86E&__gda__=1423024644_1507046d07bef35957e5a9b189fada44 "Real-Time SMS Voting APP")

We are using the following services:
1. SMS messages with TelAPI http://www.telapi.com
2. Background jobs with http://iron.io

Installation
------------
1. `npm install`
2. `gem install`
3. Change the file `.env.example` to `.env`
4. Configure TelAPI to work with your app. Direct incoming messages to the /sms route.

Upload Worker to iron.io
------------
`cd tasks`
`iron_worker upload vote`

Start 
----------
`foreman start`

When 

http://conpanna.net