import { v4 as uuid } from 'uuid';
import TightEndsModel from '../models/tightends.model.js';

export default class TightEndsCoordinator {
  static getTightEnds = () => TightEndsModel.getTightEnds();

  static createTightEnd = (newTightEnd) => {
    const tightEnd = {
      ...newTightEnd,
      id: uuid(),
    };

    return TightEndsModel.createTightEnd(tightEnd);
  };

  static getTightEnd = (id) => TightEndsModel.getTightEnd(id);

  static deleteTightEnd = (id) => TightEndsModel.deleteTightEnd(id);

  static updateTightEnd = (id, tightEnd) => TightEndsModel.updateTightEnd(id, tightEnd);
}