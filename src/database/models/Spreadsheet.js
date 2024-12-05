import {BaseModel} from "./Base.js";
import {DataTypes} from "sequelize";

export class Spreadsheet extends BaseModel {
    static init(sequelize, tableName) {
        super.initModel(sequelize, tableName);
        super.init({
            userId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id'
                }
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            operationDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            code: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }, {
            sequelize,
            tableName,
        });
    }

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
        });
    }
}