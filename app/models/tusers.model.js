module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("tusers", {
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    });
    return User;
  };