import { DataTypes } from "sequelize";
import {BaseModel} from "./Base.js";

export class User extends BaseModel {
    static init (sequelize, tableName) {
        super.initModel(sequelize, tableName);
        super.init(      {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            passwordHash: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            status: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            token: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            tokenExpiresAt: {
                type: DataTypes.DATE,
                allowNull: true,
            }
        },{
            sequelize,
            tableName,
        });
        return this;
    }

    static associate(models) {
        this.hasMany(models.Spreadsheet, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
        })
    }
}