import { Guid } from 'guid-typescript';
import { UIElement } from './UIElement';

/**
 *
 * @prop [resourceId] Unique identifier of graphical resource.
 * @prop [properties] Object containing additional properties for the icon. Default properties:
 *        [tint] Color value for masking over the item. Good for reusing icons by recoloring them.
 *               Can take hex, hsl, or rgba values. // TODO: Build default options for properties.
 *
 */
export class Icon extends UIElement {
  private resourceId: Guid;
  private properties: object;

  constructor(params: Partial<Icon>) {
    super(params);
  }
}
