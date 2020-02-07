import { Guid } from 'guid-typescript';

/**
 *
 * 
 *
 */
export abstract class Ability {
  private id: Guid;
  protected name: string;
  protected description: string;

  constructor(params: Partial<Ability>) {
    this.id = Guid.create();
  }
  
}