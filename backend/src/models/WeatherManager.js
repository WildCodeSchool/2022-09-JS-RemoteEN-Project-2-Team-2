const AbstractManager = require("./AbstractManager");

class WeatherManager extends AbstractManager {
  constructor() {
    super({ table: "weather" });
  }

  insert(weather) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, email) values (?, ?, ?)`,
      [weather.firstname, weather.lastname, weather.email]
    );
  }
}

module.exports = WeatherManager;
