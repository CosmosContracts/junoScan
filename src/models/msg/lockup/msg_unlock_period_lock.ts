import { Categories } from '../types';
import numeral from 'numeral';

class MsgUnlockPeriodLock {
    public category: Categories;
    public type: string;
    public owner: string;
    public ID: number;
    public json: any;

    constructor(payload: any) {
      this.category = 'lockup';
      this.type = payload.type;
      this.json = payload.json;
      this.owner = payload.owner;
      this.ID = payload.ID;
    }

    static fromJson(json: any) {
      return new MsgUnlockPeriodLock({
        json,
        type: json['@type'],
        owner: json.owner,
        ID: numeral(json.ID).value(),
      });
    }
}

export default MsgUnlockPeriodLock;
