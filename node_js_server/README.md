# Node.js / Express web application
Structure inspired from this repository : [Bulletproff NodeJS](https://github.com/santiq/bulletproof-nodejs)<br/>
Using AlphaVantage API : [Alpha Vantage API](https://www.alphavantage.co/documentation/)<br/>
With its npm wrapper : [npm wrapper](https://www.npmjs.com/package/alphavantage#browser-initialization)<br/>

## Development


## Structure
<pre>
src
│   app.js          # App entry point
└───api             # Express route controllers for all the endpoints of the app
└───config          # Environment variables and configuration related stuff
└───jobs            # Jobs definitions for agenda.js
└───loaders         # Split the startup process into modules
└───models          # Database models
└───services        # All the business logic is here
└───subscribers     # Event handlers for async task
└───types           # Type declaration files (d.ts) for Typescript
</pre>