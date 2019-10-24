import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';
import Meetup from '../app/models/Meetup';
import Subscript from '../app/models/Subscript';

import databaseConfig from '../config/database';

const models = [User, File, Meetup, Subscript];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.conection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.conection));
    models.map(
      model => model.associate && model.associate(this.conection.models)
    );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
