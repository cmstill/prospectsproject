import TightEndsCoordinator from "../coordinators/tightends.coordinator.js";

export const getTightEnds = async (req, res, next) => {
  try {
    const result = await TightEndsCoordinator.getTightEnds();

    res.status(200).json(result);
  } catch (ex) {
    next(ex);
  }
};

export const createTightEnd = async (req, res, next) => {
  try {
    const result = await TightEndsCoordinator.createTightEnd(req.body);
    res.status(200).json(result);
  } catch (ex) {
    next(ex);
  }
};

export const getTightEnd = async (req, res, next) => {
  console.log('Controller: getTightEnd');
  console.log('Request Params ID:', req.params.id);
  try {
    const result = await TightEndsCoordinator.getTightEnd(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json();
    }
  } catch (ex) {
    next(ex);
  }
};

export const deleteTightEnd = async (req, res, next) => {
  try {
    await TightEndsCoordinator.deleteTightEnd(req.params.id);
    res.status(204).json();
  } catch (ex) {
    next(ex);
  }
};

export const updateTightEnd = async (req, res, next) => {
  try {
    const result = await TightEndsCoordinator.updateTightEnd(req.params.id, req.body);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json();
    }
  } catch (ex) {
    next(ex);
  }
};
