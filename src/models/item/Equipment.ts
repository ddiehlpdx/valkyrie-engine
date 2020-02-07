import { Item } from './Item';
import { Guid } from 'guid-typescript';

/**
 *
 * @prop [slot] Equipment slot; head, chest, main hand, feet, etc.
 * @prop [stats] Item stats as key/value; { str: 5, dex: 2, def: 25, atk: 27 }, etc.
 * @prop [rules] Rules for equipping; profession and level requirements, etc.
 *
 */
export class Equipment extends Item {
  private slot: EquipSlot;
  private stats: object;
  private rules: EquipRules;

  constructor(params: Partial<Equipment>) {
    super(params);
  }

  create(item: object | object[]): Equipment | Equipment[] {
    throw new Error("Method not implemented.");
  }

  destroy(): void {
    throw new Error("Method not implemented.");
  }
}

interface EquipRules {
  level?: number;
  profession?: Guid[];
}

enum EquipSlot {
  'main-hand',
  'off-hand',
  'head',
  'body',
  'legs',
  'hands',
  'feet',
  'acc'
}