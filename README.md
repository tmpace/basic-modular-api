# basic-modular-api
A basic example of a modular API using express

# using this application
1. **Clone the repo to your local machine**
  1. `git clone https://github.com/tmpace/basic-modular-api.git`
2. **Install dependencies**
  1. From the project directory, run `npm install`
3. **Run the application**
  1. From the project directory, run `npm start`
4. **Send some requests**
  1. I recommend using Postman, it's very straightforward.
  2. Alternatively, make a cURL request
    1. POST: `curl -H "Content-Type: application/json" -d '{"name": "yourName"}' http://localhost:1337/hello`
    2. GET: `curl http://localhost:1337/hello`
