import { Guid } from 'guid-typescript';
import { Tile } from './Tile';

export { Terrain } from './Terrain';
export { Tile } from './Tile';

/**
 * 
 * @params [id] Battlefield's unique identifier.
 * @params [name] Battlfield's display name.
 * @params [layout] Array of Tile arrays. Layout will be:
 *                  An array of y length, containing arrays of x length.
 *                  Where y is the total height of the battlefield, and x is the total width.
 *                  Each tile can be related to the layout array via x/y coords of the tile's position property.
 * 
 */
export class Battlefield {
  id: Guid;
  name: string;
  layout: Tile[][];

  constructor(params: BattlefieldConfiguration) {
    
  }

  public static Load(): void {
    console.log('STATIC: Loading battlefield...');
  }

}

export interface BattlefieldConfiguration {

}