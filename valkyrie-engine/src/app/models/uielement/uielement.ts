import { Guid } from 'node_modules/guid-typescript';

/**
 *
 * @prop id [Guid] UI Element's unique identifier.
 *
 */
export class UIElement {
  id: Guid;

  constructor() {
    this.id = Guid.create();
  }
}
