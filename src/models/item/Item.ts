import { Guid } from 'guid-typescript';
import { ItemState } from './ItemState';
import { Icon } from '../uielement/UIElement';

export { Consumable } from './Consumable';
export { Equipment } from './Equipment';
export { ItemState } from './ItemState';

/**
 *
 * @prop [id] Item's unique identifier.
 * @prop [name] Item's display name.
 * @prop [description] Details about the item.
 * @prop [icon] Display icon's unique identifier.
 * @prop [states] Array of unique IDs of states currently applied to item.
 *
 */
export abstract class Item {
  private id: Guid;
  protected name: string;
  protected description: string;
  protected icon: Guid;
  protected states: Guid[];

  constructor(params: Partial<Item>) {
    this.id = Guid.create();
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
