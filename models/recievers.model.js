const receivers = [
  {
    name: 'cameron',
    ytpa: 2.01,
    yrr: 2.2,
    boy: 1,
    capital: 27,
  },
];

export default class ReceiversModel {
	static getReceiver = () => {
		return receivers; 
	}

	static createReceiver = (newReceiver) => { // this is accepting a newReceiver (request object from user) then pushing it to simulated DB array, then returning that newReceiver back fo coordinator
		console.log('t//Model: CreateReceiver');
		
		 receivers.push(newReceiver);

		 return newReceiver;
	}

}


