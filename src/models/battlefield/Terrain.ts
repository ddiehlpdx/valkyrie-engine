import { Guid } from 'guid-typescript';

/**
 * 
 * @prop [id] Terrain's unique identifier.
 * @prop [name] Terrain's display name.
 * @prop [texture] Unique ID of texture resource to be applied.
 * @prop [traversable] Whether or not this terrain can be crossed on foot.
 * 
 */
export class Terrain {
  private id: Guid;
  private name: string;
  private texture: Guid;
  private traversable: boolean;

  constructor(params: Partial<Terrain>) {
    this.id = Guid.create();
  }
}
