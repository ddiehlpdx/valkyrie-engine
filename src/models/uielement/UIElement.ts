import { Guid } from 'guid-typescript';

/**
 *
 * @prop [id] UI Element's unique identifier.
 *
 */
export class UIElement {
  id: Guid;

  constructor() {
    this.id = Guid.create();
  }
}