import { Guid } from 'node_modules/guid-typescript';

/**
 *
 * @prop id   [Guid]          Item's unique identifier.
 * @prop name [string]        Item's display name.
 * @prop icon [Guid]          Display icon's unique identifier.
 * @prop lore [Array<Lore>]   Additional tags for item to categorize and indicate any secondary properties.
 *                            Used to display icon tags for rarity, binding/exclusive, key/non-usable, etc.
 *
 */
export class Item {
  id: Guid;
  name: string;
  icon: Guid;
  lore: Lore[];
  state: ItemState[]; // TODO: ItemState rules

  constructor(
    name: string,
    icon: Guid,
    lore = new Array<Lore>(),
    // TODO: Initial item state values
  ) {
    this.id = Guid.create();
    this.name = name;
    this.icon = icon;
    this.lore = lore;
    // TODO: Initial item state values
  }
}

enum Lore {
  'rare',
  'elite',
  'binding',
  'key',
  'temporary'
}

enum ItemState {
  'new',
  'locked',
  'bound',
  'active',
  'latent'
}
