"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var postgres = require('postgres');
var connectionString = "postgresql://postgres:@zw#J@BL7ZK7g&6@db.saiqmuffyffcigmisyxa.supabase.co:5432/postgres";
var sql = postgres(connectionString);
exports.default = sql;
