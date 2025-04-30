import client from "./postgres";

async function test() {
    await client.connect();
    
}

export default test;