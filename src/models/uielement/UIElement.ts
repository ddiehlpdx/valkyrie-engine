import { Guid } from 'guid-typescript';

/**
 *
 * @prop [id] UI Element's unique identifier.
 *
 */
export abstract class UIElement {
  id: Guid;

  constructor(params: any) {
    this.id = Guid.create();
  }
}
