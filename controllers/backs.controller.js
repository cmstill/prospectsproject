import BacksCoordinator from "../coordinators/backs.coordinator.js";

export const getBacks = async (req, res, next) => {
  try {
    const result = await BacksCoordinator.getBacks();

    res.status(200).json(result);
  } catch (ex) {
    next(ex);
  }
};

export const createBack = async (req, res, next) => {
  try {
    const result = await BacksCoordinator.createBack(req.body);
    res.status(200).json(result);
  } catch (ex) {
    next(ex);
  }
};

export const getBack = async (req, res, next) => {
  console.log('Controller: getBack');
  console.log('Request Params ID:', req.params.id);
  try {
    const result = await BacksCoordinator.getBack(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json();
    }
  } catch (ex) {
    next(ex);
  }
};

export const deleteBack = async (req, res, next) => {
  try {
    await BacksCoordinator.deleteBack(req.params.id);
    res.status(204).json();
  } catch (ex) {
    next(ex);
  }
};

export const updateBack = async (req, res, next) => {
  try {
    const result = await BacksCoordinator.updateBack(req.params.id, req.body);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json();
    }
  } catch (ex) {
    next(ex);
  }
};
