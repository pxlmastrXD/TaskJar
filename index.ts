import { config } from 'dotenv';
config();
const port = process.env.PORT as string;

const express = require('express');
const app = express();
app.use(express.json());

import { login, newUser } from './operations/dbops';

// /accounts routes
app.post("/accounts/create", (req: any, res: any) => {
    var username: string = req.body.username;
    var password: string = req.body.password;
    var result = newUser(username, password);
    if (result === true) {
        res.status(200).send("Ok");
    } else {
        res.status(500).send("Failed to create account");
    }
})

app.post("/accounts/login", (req: any, res: any) => {
    var username: string = req.body.username;
    var password: string = req.body.password;
    var uuid: string = login(username, password);
    res.json({
        uuid: uuid,
    })
});

// /tasks routes
app.post("/tasks/get", (req: any, res: any) => {

})
app.post("/tasks/update", (req: any, res: any) => {

})



app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})