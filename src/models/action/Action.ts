import { Guid } from 'guid-typescript';

/**
 *
 * 
 *
 */
export class Action {
  private id: Guid;
  private name: string;
  private description: string;
  
  constructor(params: Partial<Action>) {
    this.id = Guid.create();
  }
}
