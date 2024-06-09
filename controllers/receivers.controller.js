import ReceiversCoordinator from "../coordinators/recievers.coordinator.js";

export const getReceivers = async (req, res, next) => {
  const result = await ReceiversCoordinator.getReceivers(); // we're awaiting this now becuase it's talking to a DB

  res.status(200).json(result);
};

export const createReceiver = async (req, res, next) => {
  // errors "bubble up " to the coordinator from the model so we can do error handling in the controller level
  try{
    const result = ReceiversCoordinator.createReceiver(req.body);
    res.status(200).json(result);
  } catch (ex) { // ex is a param that we could name anything...it's an exception (error) we're catching so ex for short
    next(ex); // this is what invokes our error handler middleware
  }
};

export const getReceiver = async (req, res, next) => {
  console.log('Controller: getReceiver');
  console.log('Request Params ID:', req.params.id);

  const result = ReceiversCoordinator.getReceiver(req.params.id); // req.params.id here is the reciever by id...req.params is on the request object and hold params 

  if (result) { // this checks if result (req.param.id) exists and if so, I get a 200 with result...if not then 404 
    res.status(200).json(result);
  } else {
    res.status(404).json();
  }
};

export const deleteReceiver = async (req, res, next) => {
  const result = ReceiversCoordinator.deleteReceiver(req.params.id);

  res.status(200).json(result);
};

export const updateReceiver = async (req, res, next) => {
  const result = ReceiversCoordinator.updateReceiver(req.params.id, req.body); // has to accept the id of the receiver you want to patch and the body object that you are going to be patching the receiver with
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json();
  }
};
// every resource I am supporting will need a function in the controller
/* ie if I am doing a get HTTP method for excercises, I'll make a getExcercises function and etc. for delete, update etc */