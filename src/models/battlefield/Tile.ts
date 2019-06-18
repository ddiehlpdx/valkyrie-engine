import { Guid } from 'guid-typescript';

/**
 *
 * 
 *
 */
export class Tile {
  id: Guid;
  terrain: Guid;
  texture: Guid;
  height: number;
  position: object;
  traversable: boolean;
}
