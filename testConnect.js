const db = require("./db/models/index");

function testConnection() {
    // Проверка подключения
    db.sequelize
      .authenticate()
      .then(() => {
        console.log("Подключение успешно!");
      })
      .catch((err) => {
        console.error("Не удалось подключиться:", err);
      });
    }

testConnection();