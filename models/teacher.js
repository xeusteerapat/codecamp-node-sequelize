module.exports = (sequelize, DataTypes) => {
  let teacher = sequelize.define('teacher', {
    name: {
      type: DataTypes.STRING(100)
    },
    age: {
      type: DataTypes.INTEGER
    }
  });
  return teacher;
};
