import { Guid } from 'guid-typescript';
import { Ability } from './models/ability/Ability';
import { Action } from './models/action/Action';
import { Battlefield } from './models/battlefield/Battlefield';
import { Terrain } from './models/battlefield/Terrain';
import { Tile } from './models/battlefield/Tile';
import { Inventory } from './models/player/Inventory';
import { Consumable } from './models/item/Consumable';
import { Equipment } from './models/item/Equipment';
import { Item } from './models/item/Item';
import { ItemState } from './models/item/ItemState';
import { Icon } from './models/uielement/Icon';
import { UIElement } from './models/uielement/UIElement';
import { Profession } from './models/unit/Profession';
import { Unit } from './models/unit/Unit';

import * as THREE from 'three';

export default abstract class Valkyrie {

  /**
   * 
   * @param params
   * 
   */
  public static init(params: ValkyrieConfiguration): void {
    console.log('init fired');
  }

  public static loadBattlefield(params: BattlefieldConfiguration): void {
    console.log('loadBattlefield fired');
  }

  public static test(): boolean {
    if (confirm('Does this work?')) {
      return true;
    }
    else return false;
  }
}

export interface ValkyrieConfiguration {
  windowWidth?: string | number,        // Width of game window; default window.innerWidth
  windowHeight?: string | number,       // Height of game window; default window.innerHeight
  // TODO: Add db params and functionality for projects made with builder.
}

export interface BattlefieldConfiguration {
  battlefield: Guid,        // Unique ID of battlefield to load
  squad?: Unit[],           // Player's squad; default player's currently set squad
  enemies?: Unit[],         // Enemy squad, default random selection by relative level
}