import {BaseModel} from "./Base.js";
import {DataTypes} from "sequelize";

export class Category extends BaseModel {
    static init (sequelize, tableName) {
        super.initModel(sequelize, tableName);
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            plannedAmount: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false,
            },
            type: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            userId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id',
                }
            },
            spreadsheetId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'spreadsheet',
                    key: 'id',
                }
            }
        }, {
            sequelize,
            tableName,
        })
    }

    static associate(models) {
        this.belongsTo(models.Spreadsheet,{
            foreignKey: 'spreadsheetId',
            as: 'spreadsheet',
        });
        this.belongsTo(models.Spreadsheet,{
            foreignKey: 'userId',
            as: 'user',
        });
        this.hasMany(models.Movement,{
            foreignKey: 'categoryId',
            onDelete: 'CASCADE',
        });
    }
}