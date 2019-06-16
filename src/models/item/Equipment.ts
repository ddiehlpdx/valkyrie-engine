import { Guid } from 'guid-typescript';
import { Item } from './Item';

/**
 *
 * @prop [slot] Equipment slot; head, chest, main hand, feet, etc.
 * @prop [stats] Item stats as key/value; { str: 5, dex: 2, def: 25, atk: 27 }, etc.
 * @prop [rules] Rules for equipping; profession and level requirements, etc.
 *
 */
export abstract class Equipment extends Item {
  slot: Guid;
  stats: object;
  rules: object;

  abstract onEquip(): void;
  abstract onRemove(): void;
}
