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
  constructor(params: ValkyrieConfiguration) {
    console.log(params);
  }

  init(): void {

  }

  test(): boolean {
    if (confirm('Does this work?')) {
      return true;
    }
    else return false;
  }
}

export interface ValkyrieConfiguration {
  windowWidth?: string | number,        // Width of game window; default window.innerWidth
  windowHeight?: string | number,       // Height of game window; default window.innerHeight
  dbName?: string,                      // Database name where game data is stored (if applicable); default ''
  dbLogin?: string,                     // Login for database; default ''
  dbPassword?: string,                  // Password for database; default ''
}
