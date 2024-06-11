import ReceiversCoordinator from "../coordinators/receivers.coordinator.js";

export const getReceivers = async (req, res, next) => {
  try {
    const result = await ReceiversCoordinator.getReceivers(); // we're awaiting this now becuase it's talking to a DB

    res.status(200).json(result);
  } catch (ex) {
    next(ex);
  }
};

export const createReceiver = async (req, res, next) => {
  // errors "bubble up " to the coordinator from the model so we can do error handling in the controller level
  try {
    const result = await ReceiversCoordinator.createReceiver(req.body);
    res.status(200).json(result);
  } catch (ex) { // ex is a param that we could name anything...it's an exception (error) we're catching so ex for short
    next(ex); // this is what invokes our error handler middleware
  }
};

export const getReceiver = async (req, res, next) => {
  console.log('Controller: getReceiver');
  console.log('Request Params ID:', req.params.id);
  try {
    const result = await ReceiversCoordinator.getReceiver(req.params.id); // req.params.id here is the reciever by id...req.params is on the request object and hold params and now this has to be awaited becuase it's an async operation becuase I'm accessing a DB
    if (result) { // this checks if result (req.param.id) exists and if so, I get a 200 with result...if not then 404 
      res.status(200).json(result);
    } else {
      res.status(404).json();
    }
  } catch (ex) {
    next(ex);
  }
};

export const deleteReceiver = async (req, res, next) => {
  try {
    await ReceiversCoordinator.deleteReceiver(req.params.id);
    res.status(204).json();
  } catch (ex) {
    next(ex); // you pretty much want to do a try/catch with next(ex) in all your controller functions ***
  }
};

export const updateReceiver = async (req, res, next) => {
  try {
    const result = await ReceiversCoordinator.updateReceiver(req.params.id, req.body); // has to accept the id of the receiver you want to patch and the body object that you are going to be patching the receiver with
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json();
    }
  } catch (ex) {
    next(ex);
  }
};

// every resource I am supporting will need a function in the controller
/* ie if I am doing a get HTTP method for excercises, I'll make a getExcercises function and etc. for delete, update etc */