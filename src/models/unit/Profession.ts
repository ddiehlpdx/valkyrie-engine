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
  id: Guid;
  name: string;
  description: string;
  stats: object;
  abilities: object;
  actions: Guid[];

  constructor(params: ProfessionConfiguration) {
    this.id = Guid.create();
    this.name = params.name;
    this.description = params.description;
    this.stats = params.stats;
    this.abilities = params.abilities;
    this.actions = params.actions;
  }
}

export interface ProfessionConfiguration {
  name: string;
  description: string;
  stats: object;
  abilities: object;
  actions: Guid[];
}
