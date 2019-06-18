import { Guid } from 'guid-typescript';
import { Tile } from './Tile';

export class Battlefield {
  id: Guid;
  layout: Tile[][];
}
