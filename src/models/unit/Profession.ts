import { Guid } from 'guid-typescript';

/**
 * 
 * @prop [id] Profession's unique identifier.
 * @prop [name] Profession's display name.
 * @prop [description] Description of class for unit selection screen.
 * @prop [stats] Starting stats for profession.
 * @prop [abilities] Abilities available to profession, by level, as key value pairs,
 *                   where unlock level is key and ability ID is value.
 *                   { 10: [ability.id], 17: [ability.id], 24: [ability.id] }
 * @prop [actions] Actions that this profession can take on the battlefield.
 * 
 */
export class Profession {
  private id: Guid;
  private name: string;
  private description: string;
  private stats: object;
  private abilities: object;
  private actions: Guid[];

  constructor(params: Partial<Profession>) {
    this.id = Guid.create();
  }
}
