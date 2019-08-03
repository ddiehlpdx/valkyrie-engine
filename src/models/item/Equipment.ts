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
  id: Guid;
  name: string;
  stats: object;
  slot: EquipSlot;
  rules: EquipRules;

  constructor(params: EquipmentConfiguration) {
    super(params);
    this.slot = params.slot;
    this.stats = params.stats;
    this.rules = params.rules;
  }

  onEquip(): void {
    throw new Error("Method not implemented.");
  }
  
  onRemove(): void {
    throw new Error("Method not implemented.");
  }

  create(item: object | object[]): Equipment | Equipment[] {
    throw new Error("Method not implemented.");
  }

  destroy(): void {
    throw new Error("Method not implemented.");
  }
}

export interface EquipmentConfiguration {
  name: string;
  stats: object;
  slot: EquipSlot;
  rules: EquipRules;
}

export interface EquipRules {
  level?: number;
  profession?: Guid[];
}

export enum EquipSlot {
  'main-hand',
  'off-hand',
  'head',
  'body',
  'legs',
  'hands',
  'feet',
  'acc'
}