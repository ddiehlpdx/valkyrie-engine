import { Guid } from 'guid-typescript';
export { Icon } from './Icon';

/**
 *
 * @prop [id] UI Element's unique identifier.
 *
 */
export abstract class UIElement {
  private id: Guid;
  private name: string;
  protected height: number;
  protected width: number;
  protected posX: number;
  protected posY: number;
  protected posZ: number | 'top' | 'bottom';
  protected opacity: number;
  

  constructor(params: Partial<UIElement>) {
    this.id = Guid.create();
  }
}
