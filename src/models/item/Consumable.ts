import { Item } from './Item';

export class Consumable extends Item {
  
  constructor(params: ConsumableConfiguration) {
    super(params);
  }

  create(item: object | object[]): Consumable | Consumable[] {
    throw new Error("Method not implemented.");
  }
  
  destroy(): void {
    throw new Error("Method not implemented.");
  }
  
}

export interface ConsumableConfiguration {
  
}
