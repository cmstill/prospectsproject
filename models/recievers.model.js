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
  static getReceivers = () => receivers;

  static createReceiver = (newReceiver) => { // this is accepting a newReceiver (request object from user) then pushing it to simulated DB array, then returning that newReceiver back fo coordinator
    console.log('t//Model: CreateReceiver');

    receivers.push(newReceiver);

    return newReceiver;
  };

  static getReceiver = (id) => {
    const receiver = receivers.find((r) => r.id === id); // this is one-line arrow function syntax for the array.find() method here.

    return receiver;
  };

  static deleteReceiver = (id) => {
    receivers = receivers.filter((r) => (r.id !== id));

    return true;
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
