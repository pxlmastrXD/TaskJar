import db from './sqlite';
import { v4 as uuidv4 } from 'uuid';

// Works
export function newUser(username: string, password: string): boolean {
    var status = true;
    var uuid = uuidv4();
    try {
        db.prepare("INSERT INTO taskjar (username, password, uuid, tasks) values (?,?,?,'{}')").run(username, password, uuid);
    } catch (error) {
        status = false;
    }
    return status
}

// Works
export function login(username: string, password: string): string {
    var uuid = "testuuid";
    try {
        var res = db.prepare("SELECT uuid FROM taskjar WHERE username=? AND password=?").all(username, password);
        uuid = res[0].uuid;
    } catch (error) {
        console.log("error fetching");
    }
    return uuid;
}

// Works
export function getTasks(uuid: string): string {
    var tasks = "";
    try {
        var res = db.prepare("SELECT tasks FROM taskjar WHERE uuid=?").all(uuid);
        tasks = res[0].tasks;
    } catch (error) {
        console.log("error get tasks");
    }
    return tasks
}