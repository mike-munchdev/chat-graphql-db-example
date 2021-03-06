/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'channelStatuses',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      status: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      }
    },
    {
      tableName: 'channelStatuses',
      timestamps: false
    }
  );
};
