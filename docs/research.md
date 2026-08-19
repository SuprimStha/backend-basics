1. What is a backend?

The backend is the part of an app that runs on a server, not in the users browser. The browser handles what you see and click.
The server handles the stuff you shouldn't be able to mess with like checking passwords calculating prices or saving data.
Everything can't live in the browser because anyone can open dev tools and change the code running there.
Example: The backend calls the weather providers API  using a key then just sends the browser the result
temperature, forecast, etc. The browser never sees that key.

2. What is a backend made of?

Client (browser/app)
request
API layer (the routes, like /users /orders)
App code (the actual logic "check stock create order")
Server/runtime (Node, Python etc.runs the code)
Database (stores everything
Server/runtime: the engine that keeps running and executes your code.
App code: your business logic.
API layer: the doors in the endpoints a client can call.
Database: where data lives so it doesn't disappear when the server restarts.

3. What is an API?

In words it's like a restaurant menu. You don't walk into the kitchen. Cook you tell the waiter what you want from the menu
and the kitchen sends it back. The menu is the API. It tells you what you're allowed to ask for without showing you how its made.
For a developer an API is a set of endpoints with defined inputs and outputs that lets one piece of software talk to another without
needing to know how it works internally. The backend can change its internals however it wants long as the API stays the same.

4. What is JSON?

JSON is a text format for sending data around. Key-value pairs, lists, nested objects.
It over XML mainly because its shorter and easier to read.
It also looks exactly like the objects and arrays programmers already use in their code so there's barely any translation needed to use it.
json
{

"id": 1
"name": "suprim shrestha"
"isActive":
"roles": ["admin"]
"manager": null
}

5. HTTP methods and status codes

GET  read something no changes made.
POST create something
PUT replace something entirely.
PATCH update part of something.
DELETE remove something.
Status codes:
2xx it worked.
4xx you (the client) messed up the request.
5xx  the server messed up.
200 OK here's your data.
201 created successfully.
204 worked, nothing to send back.
400 bad request.
404 not found.
500 server crashed/errored.

Idempotent means doing it or ten times gives the same result. GET, PUT DELETE are idempotent.
POST and PATCH usually aren't calling POST twice can create two things of one.

6. What is a REST API?

REST is a set of rules for designing APIs around "things" (resources) like users or orders instead of actions. Each resource gets a URL (`/users/5`). The HTTP method says what to do with it. `GET` to read, `POST` to create, `DELETE` to remove. It's "stateless " meaning the server doesn't remember you between requests. Every request carries what it needs. That's why `GET /users/5` beats `GET /getUser?id=5`: the verb already lives in `GET` so putting "get" in the URL too is redundant. URLs should read like nouns, not verb-y function names.

7. What is a database?

Variables disappear when your program stops and files get fast. No easy search, no safety when multiple people write at once. A database handles storage, fast lookups and rules (like "email required") for you. SQL databases ( Postgres) store data in strict tables with relationships. Great when data needs to stay consistent like banking. NoSQL databases ( MongoDB) are flexible schema-less. Great for data that varies a lot like a product catalog.

8. What is an ORM?

An ORM lets you talk to your database using your programming language of raw SQL strings.
js
// Raw SQL
db.query('SELECT * FROM users WHERE id = $1' [5]);
// ORM (Prisma)
prisma.user.findUnique({ where: { id: 5 } });
Easier and safer to write but you lose some control. For queries the SQL an ORM generates can be slower than SQL you'd write by hand.

9. Languages & Frameworks

Common backend pairs: JS/TS → Express, Python → Django, Ruby → Rails, Java → Spring, PHP → Laravel. Node.js lets JavaScript run outside the browser on a server. Express is a framework on top of Node for handling routes and requests easily.

10. JavaScript & TypeScript

typeScript adds types to JS catching mistakes (like passing a string where a numbers expected) before the code even runs. Plain JS only fails when it actually executes. TypeScript code gets "compiled" down to JS since thats all browsers/Node understand.

Use `const` by default `let` when a value changes and skip `var`. It leaks outside blocks in ways.

Backends need async code because slow tasks (DB calls, API requests) shouldn't freeze the server. Evolution: callbacks → promises (`.then()`) → async/await (reads, like synchronous code, cleanest option).

`type` and `interface` both describe object shapes; `interface` can be extended later `type` can do more (like unions). Function type annotations look like: `function add(a: number, b: number): number`.
