import { config } from 'dotenv';
config()

const express = require('express');
const app = express();
const port = process.env.PORT as string;

// /accounts routes
app.post("/accounts/create", (req, res) => {
    
})

app.post("/accounts/login", (req, res) => {

})

// /tasks routes
app.post("/tasks/get", (req, res) => {

})
app.post("/tasks/update", (req, res) => {
    
})



app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})