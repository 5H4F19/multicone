export const packageData = (name) => {
    return `{
  "name": "${name}",
  "version": "1.0.0",
  "description": "Multicone app",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "bcryptjs": "^2.4.3",
    "dotenv": "^8.2.0",
    "express-async-handler": "^1.1.4",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.11.13"
  }
}
`}