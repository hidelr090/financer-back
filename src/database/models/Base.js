import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
export class BaseModel extends Model {
    static initModel(sequelize, tableName) {
        super.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: () => uuidv4(),
                    primaryKey: true,
                },
                createdAt: {
                    type: DataTypes.DATE,
                    defaultValue: DataTypes.NOW,
                },
                updatedAt: {
                    type: DataTypes.DATE,
                    defaultValue: DataTypes.NOW,
                },
                deletedAt: {
                    type: DataTypes.DATE,
                    allowNull: true,
                },
            },
            {
                sequelize,
                tableName,
                timestamps: true,
                paranoid: true,
            }
        );
    }
}
