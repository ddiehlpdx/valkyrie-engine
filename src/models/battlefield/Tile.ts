import { Guid } from 'guid-typescript';

/**
 *
 * @param [id] Tile's unique identifier.
 * @param [terrain] Unique ID of the terrain type to apply to this title.
 * @param [height] Height of tile in units, barriers, hills, etc. 1 unit = 1 movement space upward.
 * @param [position] Within the battlefield, the tile's x,y coords as an object; { x: 12, y: 18 }.
 *
 */
export class Tile {
  id: Guid;
  terrain: Guid;
  height: number;
  position: object;

  constructor(params: TileConfiguration) {

  }
}

export interface TileConfiguration {
  
}
