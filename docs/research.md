1. What is a backend?
The backend is the part of an app that runs on a server, not in the user's browser. The browser handles what you see and click.
The server handles the stuff you shouldn't be able to mess with like checking passwords, calculating prices, or saving data.
Everything can't live in the browser because anyone can open dev tools and change the code running there. 

Example: The backend calls the weather provider's API  using a secret key, then just sends the browser the result
temperature, forecast, etc. The browser never sees that key.

2. What is a backend made of?

Client (browser/app)
      request
API layer (the routes, like /users, /orders)
      
App code (the actual logic "check stock, create order")
      
Server/runtime (Node, Python, etc.runs the code)
      
Database (stores everything longterm)


Server/runtime: the engine that keeps running and executes your code.
App code: your actual business logic.
API layer: the doors in the endpoints a client can call.
Database: where data lives so it doesn't disappear when the server restarts.

3. What is an API?

In plain words,it's like a restaurant menu. You don't walk into the kitchen and cook you tell the waiter what you want from the menu, 
and the kitchen sends it back. The menu is the API. It tells you what you're allowed to ask for, without showing you how it's made.
For a developer, an API is a set of endpoints with defined inputs and outputs that lets one piece of software talk to another without 
needing to know how it works internally. The backend can change its internals however it wants, as long as the API stays the same.

4. What is JSON?

JSON is a simple text format for sending data around — key-value pairs, lists, nested objects. 
It won over XML mainly because it's shorter and easier to read . 
It also looks almost exactly like the objects and arrays programmers already use in their code, so there's barely any translation needed to use it.
json
{
  "id": 1,
  "name": "suprim shrestha",
  "isActive": true,
  "roles": ["admin"],
  "manager": null
}


5. HTTP methods and status codes

GET  read something, no changes made.
POST create something new.
PUT replace something entirely.
PATCH update part of something.
DELETE remove something.

Status codes:
2xx it worked.
4xx you (the client) messed up the request.
5xx  the server messed up.
200 OK, here's your data.
201 created successfully.
204 worked, nothing to send back.
400 bad request.
404 not found.
500 server crashed/errored.

Idempotent means doing it once or ten times gives the same result. GET, PUT, DELETE are idempotent. 
POST and PATCH usually aren't calling POST twice can create two things instead of one.


