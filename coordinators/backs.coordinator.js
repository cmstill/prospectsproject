import { v4 as uuid } from 'uuid';
import BacksModel from '../models/backs.model.js';

export default class BacksCoordinator {
  static getBacks = () => BacksModel.getBacks();

  static createBack = (newBack) => {
    const back = {
      ...newBack,
      id: uuid(),
    };

    return BacksModel.createBack(back);
  };

  static getBack = (id) => BacksModel.getBack(id);

  static deleteBack = (id) => BacksModel.deleteBack(id);

  static updateBack = (id, back) => BacksModel.updateBack(id, back);
}
