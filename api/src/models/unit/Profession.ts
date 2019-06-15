import { Guid } from 'guid-typescript';
import { Ability } from '../ability/Ability';
import { Action } from '../battlefield/Action';

export class Profession {
  id: Guid;
  name: string;
  abilities: Ability[];
  stats: object;
  actions: Action[];

  constructor() {
    this.id = Guid.create();
  }
}
