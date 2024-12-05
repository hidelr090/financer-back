import {Sequelize} from "sequelize";

import {User} from "./models/User.js";
import {Category} from "./models/Category.js";
import {Spreadsheet} from "./models/Spreadsheet.js";
import {Movement} from "./models/Movement.js";

const { BD_PASSWORD, DB_USER, DB_NAME} = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, BD_PASSWORD,  {
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    dialectOptions: {
        useNativeUUID: true,
    }
});

User.init(sequelize, 'user');
Spreadsheet.init(sequelize, 'spreadsheet');
Category.init(sequelize, 'category');
Movement.init(sequelize, 'movement');

Spreadsheet.associate(sequelize.models);
Category.associate(sequelize.models);
Movement.associate(sequelize.models);
User.associate(sequelize.models);

export default sequelize;


