import { Guid } from 'guid-typescript';

export { Profession } from './Profession';

/**
 *
 * 
 *
 */
export class Unit {
  private id: Guid;
  private name: string;
  private level: number;
  public exp: number;
  public hp: number;
  public mp: number;
  public strength: number;
  public vitality: number;
  public dexterity: number;
  public agility: number;
  public intellect: number;
  public willpower: number;
  public profession: Guid;

  constructor(params: Partial<Unit>) {
    this.id = Guid.create();
  }
}
