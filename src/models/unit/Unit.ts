import { Guid } from 'guid-typescript';
import { Profession } from './Profession';

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
  profession: Profession;

  constructor() {
    this.id = Guid.create();
  }
}
