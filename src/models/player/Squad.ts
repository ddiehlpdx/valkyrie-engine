import { Guid } from 'guid-typescript';
import { Unit, Profession } from '../unit/Unit';
import { Item, Equipment, Consumable, ItemState } from '../item/Item';
import { Ability } from '../ability/Ability';

export class Squad {
  units: Unit[];

  constructor(params: SquadConfiguration) {

  }
}

export interface SquadConfiguration {

}
