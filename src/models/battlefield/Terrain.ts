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
  id: Guid;
  name: string;
  texture: Guid;
  traversable: boolean;

  constructor(params: TerrainConfiguration) {
    this.id = Guid.create();
    this.name = params.name;
    this.texture = params.texture;
    this.traversable = params.traversable;
  }
}

export interface TerrainConfiguration {
  name: string,
  texture: Guid,
  traversable: boolean
}
