/* eslint-disable no-underscore-dangle */
import { db } from '../lib/database.js';
import Constants from '../lib/constants.js';

export default class BacksModel {
  static getBacks = async () => db.getDb().collection(Constants.RBS_COLLECTION).find({}, { projection: Constants.DEFAULT_PROJECTION }).toArray();

  static createBack = async (newBack) => { 
    console.log('t//Model: CreateBack');

    await db.getDb().collection(Constants.RBS_COLLECTION).insertOne({ newBack });
    delete newBack._id;
  };

  static getBack = (id) => {
    console.log('Model: getBack with ID:', id);
    return db.getDb().collection(Constants.RBS_COLLECTION).findOne({ id }, { projection: Constants.DEFAULT_PROJECTION });
  };

  static deleteBack = (id) => db.getDb().collection(Constants.RBS_COLLECTION).deleteOne({ id });

  static updateBack = async (id, back) => {
    const update = {
      $set: {},
    };

    Object.keys(back).forEach((key) => {
      if (key === 'id') {
        return;
      }
      update.$set[key] = back[key];
    });

    const result = await db.getDb().collection(Constants.RBS_COLLECTION).findOneAndUpdate({ id }, update, { returnDocument: 'after' });

    if (result) {
      delete result._id;
      return result;
    }

    return false;
  };
}
