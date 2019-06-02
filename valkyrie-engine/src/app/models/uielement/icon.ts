import { Guid } from 'node_modules/guid-typescript';
import { UIElement } from './uielement';

/**
 *
 * @prop id         [Guid] Icon's unique identifier.
 * @prop resourceId [Guid] Unique identifier of graphical resource.
 *
 */
export class Icon extends UIElement {
  resourceId: Guid;
  tint: number[];
}
