import db from './sqlite';
import { v4 as uuidv4 } from 'uuid';

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