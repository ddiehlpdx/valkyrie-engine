import { Guid } from 'guid-typescript';
import { ItemState } from './ItemState';

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
  id: Guid;
  name: string;
  description: string;
  icon: Guid;
  states: Guid[];

  constructor(
    name: string,
    description: string,
    icon: Guid,
    states = new Array<Guid>()
  ) {
    this.id = Guid.create();
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.states = states;
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

  getStates(): ItemState[] {
    // TODO: Return array of ItemStates, retrieving by ID for each ID in this.states array.
    return [];
  }

  setState(stateId: string | Guid): void {
    if (typeof(stateId) === 'string') {
      stateId = Guid.parse(stateId);
    }
  }

  setCustomState(
    name: string,
    description: string,
    iconEffects: object = {},
    subIconId?: Guid
  ): void {
    
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
