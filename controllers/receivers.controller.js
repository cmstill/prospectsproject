import ReceiversCoordinator from "../coordinators/recievers.coordinator.js";

export const getReceivers = async (req, res, next) => {
  console.log('Controller: getRecievers');

  const result = ReceiversCoordinator.getReceivers();

  res.status(200).json(result);
};

export const createReceiver = async (req, res, next) => {
  console.log('Controller: createReciever');
  res.status(200).json({});
};

export const getReceiver = async (req, res, next) => {
  console.log(`Controller: getReciever(${req.params.id})`);
  res.status(200).json({});
};

export const replaceReceiver = async (req, res, next) => {
  console.log(`Controller: replaceReciever(${req.params.id})`);
  res.status(200).json({});
};

export const deleteReceiver = async (req, res, next) => {
  console.log(`Controller: deleteReciever(${req.params.id})`);
  res.status(200).json({});
};

export const updateReceiver = async (req, res, next) => {
  console.log(`Controller: updateReciever(${req.params.id})`);
  res.status(200).json({});
};
// every resource I am supporting will need a function in the controller
/* ie if I am doing a get HTTP method for excercises, I'll make a getExcercises function and etc. for delete, update etc */