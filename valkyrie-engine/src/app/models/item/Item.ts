import { Guid } from 'node_modules/guid-typescript';
import { Lore } from './Lore';
import { ItemState } from './ItemState';

/**
 *
 * @prop {Guid}        id Item's unique identifier.
 * @prop {string}      name Item's display name.
 * @prop {string}      description Details about the item.
 * @prop {Guid}        icon Display icon's unique identifier.
 * @prop {Lore[]}      lore Array of lore attributed to item.
 * @prop {ItemState[]} state Array of states currently applied to item.
 *
 */
export class Item {
  id: Guid;
  name: string;
  icon: Guid;
  lore: Lore[];
  state: ItemState[]; // TODO: ItemState rules

  constructor(name: string, icon: Guid, description: string, lore = new Array<Lore>(), state = new Array<ItemState>()) {
    this.id = Guid.create();
    this.name = name;
    this.icon = icon;
    this.lore = lore;
    this.state = state;
  }
}
