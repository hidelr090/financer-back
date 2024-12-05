import {BaseModel} from "./Base.js";
import {DataTypes} from "sequelize";

export class Movement  extends  BaseModel {
    static init (sequelize, tableName) {
        super.initModel(sequelize, tableName);
        super.init({
            categoryId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'category',
                    key: 'id',
                }
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            operationDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            amount: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false,
            }
        }, {
            sequelize,
            tableName,
        });
    }

    static associate(models) {
        this.belongsTo(models.Category, {
            foreignKey: 'categoryId',
            as: 'category',
        });
    }
}