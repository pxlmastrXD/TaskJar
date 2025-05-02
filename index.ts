import { config } from 'dotenv';
config()

const express = require('express');
const app = express();
const port = process.env.PORT as string;

// /accounts routes
app.post("/accounts/create", (req: any, res: any) => {
    
})

app.post("/accounts/login", (req: any, res: any) => {

});

// /tasks routes
app.post("/tasks/get", (req: any, res: any) => {

})
app.post("/tasks/update", (req: any, res: any) => {

})



app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})