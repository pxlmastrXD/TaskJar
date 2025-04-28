import { config } from 'dotenv';
config()

const express = require('express');

const app = express();
const port = process.env.PORT as string;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})