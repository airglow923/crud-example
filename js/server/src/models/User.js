export default (sequelize, DataTypes) =>
  sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
  });
