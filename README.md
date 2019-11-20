🎉Welcome to DevOps challenge! Feel free to investigate the repo and do whatever you want, except forking the repo.

## Overview
Here is a tiny node app that does one simple job — listens for incoming HTTP-requests and writes them all to MongoDB.

To start the app, set `MONGODB_URL` environment variable, pass port as an `port` argument and run `npm start`. You may start as much apps as you want.

## What we want
• Deploy this app and all required dependencies in a easiest way. Docker/compose is a good choice.  
• Collect logs from app, balancer and database in a unified way in centralized place. Main goal here is to discover logs easily during post-mortem.  
• Monitor our infrastructure and get notified if something goes probably wrong. Simple email alert is a good choice.  
• Know which endpoints are used — path and HTTP-response code are enough. 

## What you need to do
• Dockerize an app and run it together with MongoDB via docker-compose.  
• Run few app versions and setup an nginx-based load balancer.  
• Collect logs. It should be easy to find, traverse and dig them.    
• Implement simple APM. When something goes wrong we need to be notified.  
• Feel free to use any tools you know. Do not overengineer things, it's just a challenge, real solutions will come later.    

## Before you start
Read the README.md one more time, take a short break. Write back with the estimation and overview of your solution. When ready, deploy it somewhere that we can touch it live.

Feel free to ask if you have any questions. Have fun!



