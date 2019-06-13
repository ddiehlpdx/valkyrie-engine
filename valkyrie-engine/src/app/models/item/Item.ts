import { Guid } from 'node_modules/guid-typescript';
import { Lore } from './Lore';
import { ItemState } from './ItemState';

/**
 *
 * @prop [id] Item's unique identifier.
 * @prop [name] Item's display name.
 * @prop [description] Details about the item.
 * @prop [icon] Display icon's unique identifier.
 * @prop [lore] Array of lore attributed to item.
 * @prop [state] Array of states currently applied to item.
 *
 */
export abstract class Item {
  id: Guid;
  name: string;
  description: string;
  icon: Guid;
  lore: Lore[];
  state: ItemState[];

  constructor(
    name: string,
    description: string,
    icon: Guid,
    lore = new Array<Lore>(),
    state = new Array<ItemState>()
  ) {
    this.id = Guid.create();
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.lore = lore;
    this.state = state;
  }

  getId(): Guid {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  getIcon(): Guid {
    return this.icon;
  }

  setIcon(iconId: Guid): void {
    this.icon = iconId;
  }

  getLore(): Lore[] {
    return this.lore;
  }

  setLore(lore: string | Guid): void {
    if (typeof(lore) === 'string') {
      lore = Guid.parse(lore);
    }
  }

  getState(): ItemState[] {
    return this.state;
  }

  /**
   *
   * @param state string name of ItemState or Guid id of ItemState. Used to apply states for locking/binding/etc Items.
   *
   */
  setState(state: string | Guid): void {
    if (typeof(state) === 'string') {
      state = Guid.parse(state);
    }
  }

  /**
   *
   * @param item Item properties as object, or array of item property objects.
   * @returns new instantiated item or array of items of the child class's type.
   *
   */
  abstract create(item: object | object[]): Item | Item[];

  /**
   *
   * Destroy this item, removing it from inventory.
   *
   */
  abstract destroy(): void;
}
