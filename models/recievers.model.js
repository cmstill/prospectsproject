/* eslint-disable no-underscore-dangle */
import { db } from '../lib/database.js'; // again mongo here is just a renaming of Database class from the file I'm importing
import Constants from '../lib/constants.js';

let receivers = [
  {
    id: '1',
    name: 'cameron',
    ytpa: 2.01,
    yrr: 2.2,
    boy: 1,
    capital: 27,
  },
];

export default class ReceiversModel {
  static getReceivers = async () =>
  // return widgets...this needs to be an async function because we're interacting with a database

		 db.getDb().collection(Constants.WRS_COLLECTION).find({}, { projection: Constants.DEFAULT_PROJECTION }).toArray(); // this is using our Database class we set up lib/database and calling getDb method on that then calling .collection method to speciffy what collection we're working with then .find mongo CRUD method fin because we're getting the documents in our collection

  static createReceiver = async (newReceiver) => { // this is accepting a newReceiver (request object from user) then adding it to the wrs collection in my db
    console.log('t//Model: CreateReceiver');

    await db.getDb().collection(Constants.WRS_COLLECTION).insertOne({ newReceiver });
		delete newReceiver._id; // using delte keyword to delete _id property on newReciever object because insertOne doesnt take a projection so we can't do it there
		return newReceiver; // these two lines are so I get returned to me what I actually want which is the new receiver I created in this case
  };

  static getReceiver = (id) => {
    return db.getDb().collection(Constants.WRS_COLLECTION).findOne({ id }, { projection: Constants.DEFAULT_PROJECTION}); //TODO: test this once I can create widgets
  };

  static deleteReceiver = (id) => {
    return db.getDb().collection(Constants.WRS_COLLECTION).deleteOne({ id });
  };

  static updateReceiver = (id, receiver) => {
    const receiverIndex = receivers.findIndex((r) => (r.id === id));
    if (receiverIndex > -1) {
      Object.keys(receiver).forEach((key) => {
        if (key === 'id') {
          return;
        }
        receivers[receiverIndex][key] = receiver[key];
      });

      return receivers[receiverIndex];
    }

    return false;
  };
}
