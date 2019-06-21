import { Guid } from 'guid-typescript';

/**
 *
 * @prop [id] State's unique identifier.
 * @prop [name] State's display name.
 * @prop [description] Details about the effect of this lore (optional).
 * @prop [iconEffects] List of CSS properties to apply to display icon. Allows for 
 *                     all items of 'disabled' state to have gray overlay, all 
 *                     items of 'rare' status to have a yellow border, etc.
 * @prop [subIconId] Unique identifier of any sub icon that is applied over an icon
 *                   of this state. Items with state 'new' have an exclamation point 
 *                   laid over the bottom right of icon, items of state 'locked'
 *                   have a lock laid over the icon, etc. Sub icon is placed over the
 *                   item's primary icon after icon effects are applied, so any 
 *                   icon effects will not be applied to sub icon.
 *
 */

export class ItemState {
  id: Guid;
  name: string;
  description: string;
  iconEffects: object;
  subIconId: Guid;
  
  constructor(params: ItemStateConfiguration) {
    this.id = Guid.create();
    this.name = params.name;
    this.description = params.description;
    this.iconEffects = params.iconEffects;
    
    if (params.subIconId) {
      this.subIconId = params.subIconId;
    }
  }
}

export interface ItemStateConfiguration {
  name: string;
  description: string;
  iconEffects: object;
  subIconId: Guid;
}
