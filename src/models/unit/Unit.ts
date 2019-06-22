import { Guid } from 'guid-typescript';

export { Profession } from './Profession';

/**
 *
 * 
 *
 */
export class Unit {
  id: Guid;
  name: string;
  level: number;
  hp: number;
  mp: number;
  strength: number;
  vitality: number;
  dexterity: number;
  agility: number;
  intellect: number;
  willpower: number;
  profession: Guid;

  constructor(params: UnitConfiguration) {
    this.id = Guid.create();
  }
}

export interface UnitConfiguration {

}
