import { getTasks, updateTasks } from "./operations/dbops";

console.log(getTasks("uuid"));
updateTasks("uuid", "{}")
console.log(getTasks("uuid"))