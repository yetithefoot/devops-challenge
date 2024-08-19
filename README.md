🎉 Welcome to the DevOps challenge!

The repo contains a tiny NodeJS app that listens for incoming HTTP requests and writes related logs to MongoDB. To start the app, the `MONGODB_URL` environment variable is required, HTTP port may be specified as a `port` argument during the app start. 

## Problem
We want to run an app that handles a high amount (burstable) of HTTP requests and is easy to scale and monitor.

## Proposed solution
- Deploy and run the app with a plain vanilla Docker (Compose) configuration. Here you have to Docekrize all the components and required dependencies.
- Run multiple instances of the app and place the network balancer in front of them. nginx or AWS Balancer are alternatives.
- Collect logs from the apps, balancers, and the database in a unified way in a centralized place. The goal here is the easiest discoverability of the log data during post-mortem.  
- Define and monitor key infrastructure metrics. We should be notified if something is wrong. A simple email alert is a good choice.  

The proposed solution is just a recommendation, feel free to use any other tool or approach. Do not overengineer things, it's just a test-challenge, a real-world solutions will be different.

## How we score and test
Deploy the solution to the cloud of your choice, we recommend AWS as our main partner. Provide instructions on deploying and testing the HTTP endpoint, we'll use tools like ApacheBench for load testing. Provide the link to the code repo that we can explore. Provide access to the database. Provide instructions on logs digging.
We score not just the final technical implementation, but also other aspects: overall decisions made and tool choices, delivery, and communications.  Sure, the proposed solution should be understandable, maintainable, reasonable, performant, secure, composable, and many other important words. But the main goal is that yourself is happy with the solution, and can explain and reason why it made the way, it made. 


## Before you start
Read the README.md one more time, and take a short break. Then write back to your interviewer with the estimation and a brief description of your solution. When confirmed, start working on that ready, and deploy it somewhere in the cloud so that we can touch it live.

Feel free to ask if you have any questions. Have fun!



