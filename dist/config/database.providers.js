"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const dotenv = require('dotenv');
if (process.env.NODE_ENV !== 'PRODUCTION') {
    dotenv.config({ path: 'config/config.env' });
}
console.log(process.env);
exports.databaseProviders = {
    type: 'postgres',
    host: process.env.POSTGRESQL_ADDON_HOST,
    port: +process.env.POSTGRESQL_ADDON_PORT,
    username: process.env.POSTGRESQL_ADDON_USER,
    password: process.env.POSTGRESQL_ADDON_PASSWORD,
    database: process.env.POSTGRESQL_ADDON_DB,
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: true
};
//# sourceMappingURL=database.providers.js.map