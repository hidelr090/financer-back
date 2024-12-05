import express from 'express';
import cors from 'cors';
import router from "./router.js";
import dotenv from "dotenv";
import sequelize from "./database/config.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', router);

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(8080);

sequelize.authenticate().then(r => console.log('Database Authenticated successfully.'));
sequelize.sync().then(r => console.log('Database Connected'));

console.log('Server running at http://localhost:8080');