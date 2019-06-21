import { Equipment } from './Equipment';

export class Weapon extends Equipment {
  
  constructor(params: WeaponConfiguration) {
    super(params);
  }

  onEquip(): void {
    throw new Error("Method not implemented.");
  }
  
  onRemove(): void {
    throw new Error("Method not implemented.");
  }

  create(item: object | object[]): Weapon | Weapon[] {
    throw new Error("Method not implemented.");
  }

  destroy(): void {
    throw new Error("Method not implemented.");
  }


}

export interface WeaponConfiguration {
  
}