/* eslint-disable no-underscore-dangle */
import { db } from '../lib/database.js';
import Constants from '../lib/constants.js';

export default class TightEndsModel {
  static getTightEnds = async () => db.getDb().collection(Constants.TES_COLLECTION).find({}, { projection: Constants.DEFAULT_PROJECTION }).toArray();

  static createTightEnd = async (newTightEnd) => { 
    console.log('t//Model: CreateTightEnd');

    await db.getDb().collection(Constants.TES_COLLECTION).insertOne({ newTightEnd });
    delete newTightEnd._id;
  };

  static getTightEnd = (id) => {
    console.log('Model: getTightEnd with ID:', id);
    return db.getDb().collection(Constants.TES_COLLECTION).findOne({ id }, { projection: Constants.DEFAULT_PROJECTION });
  };

  static deleteTightEnd = (id) => db.getDb().collection(Constants.TES_COLLECTION).deleteOne({ id });

  static updateTightEnd = async (id, tightEnd) => {
    const update = {
      $set: {},
    };

    Object.keys(tightEnd).forEach((key) => {
      if (key === 'id') {
        return;
      }
      update.$set[key] = tightEnd[key];
    });

    const result = await db.getDb().collection(Constants.RBS_COLLECTION).findOneAndUpdate({ id }, update, { returnDocument: 'after' });

    if (result) {
      delete result._id;
      return result;
    }

    return false;
  };
}