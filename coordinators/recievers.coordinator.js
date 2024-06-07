import ReceiversModel from '../models/recievers.model.js';

export default class ReceiversCoordinator { // making this a class so that I can export then use the methods I create within the class in other modules
  static getReceivers = () => {
    console.log('\t Coordinator : getReceivers()');

    return ReceiversModel.getReceiver(); // have to return something here because this is what you will be passing to the controller..and what I'm returning is the return value from getReciever in my ReceiversModel class which is my array simualting a DB
  };
}

// coordinators are where we manipulate requests in a way that needs to be done every time, like generating a unique ID for every request
