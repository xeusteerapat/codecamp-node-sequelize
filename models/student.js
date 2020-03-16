module.exports = (sequelize, DataTypes) => {
  let student = sequelize.define('student', {
    name: {
      type: DataTypes.STRING(100)
    },
    year: {
      type: DataTypes.INTEGER
    }
  });
  return student;
};
