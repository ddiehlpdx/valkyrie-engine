import { Guid } from 'guid-typescript';
export { Icon } from './Icon';

/**
 *
 * @prop [id] UI Element's unique identifier.
 *
 */
export abstract class UIElement {
  id: Guid;
  name: string;
  height: number;
  width: number;
  posX: number;
  posY: number;
  posZ: number | 'top' | 'bottom';
  opacity: number;
  

  constructor(params: any) {
    this.id = Guid.create();
    this.name = params.name;
    this.height = params.height;
    this.width = params.width;
    this.posX = params.posX || 0;
    this.posY = params.posY || 0;
    this.posZ = params.posZ || 'top';
    this.opacity = params.opacity || 1;
  }
}
