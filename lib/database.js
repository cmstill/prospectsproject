import { MongoClient } from 'mongodb';

export default class Database { // this is so I can make my mongo connections variable like connecting to prod, dev, etc. environments
  // config has all DB settings
  _instance = null;

  init = async (config) => {
    const client = new MongoClient(config.url);
    await client.connect();// this is async function that connects to mongo url... .connect is a method on MongoClient class
    this._instance = client.db(config.database); // all this is setting my init function to accept a url property and a database property so I can pass those to init and will connect whereever I need***
  };

  // this is a function in the Database class that will call our db connection with at our url and our specific database so we can use mongo methods in JS...like in our model to access and manipulate db
  getDb = () => {
    return this._instance;
  };
}

export const db = new Database();
