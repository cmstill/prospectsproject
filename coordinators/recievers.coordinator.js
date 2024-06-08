import { v4 as uuid } from 'uuid';
import ReceiversModel from '../models/recievers.model.js';

export default class ReceiversCoordinator { // making this a class so that I can export then use the methods I create within the class in other modules
  static getReceivers = () => ReceiversModel.getReceivers(); // have to return something here because this is what you will be passing to the controller..and what I'm returning is the return value from getReciever in my ReceiversModel class which is my array simualting a DB

  static createReceiver = (newReceiver) => {
    const receiver = {
      ...newReceiver,
      id: uuid(),
    }; // this is restructuring newReceiver and adding an id property with value of uuid() then saving that to variable reciever

    return ReceiversModel.createReceiver(receiver);
  };

  static getReceiver = (id) => ReceiversModel.getReceiver(id);

  static deleteReceiver = (id) => ReceiversModel.deleteReceiver(id);

  static updateReceiver = (id, receiver) => ReceiversModel.updateReceiver(id, receiver); // id here is the id of the receiver you're finding to update and receiver param is the body...what you're passing as the update.
}
// coordinators are where we manipulate requests in a way that needs to be done every time, like generating a unique ID for every request
