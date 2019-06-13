import { Guid } from 'node_modules/guid-typescript';
import { ItemState } from './ItemState';

/**
 *
 * @prop [id] Item's unique identifier.
 * @prop [name] Item's display name.
 * @prop [description] Details about the effect of this lore (optional).
 * @prop [states] States automatically applied to items of this lore. Used to trigger
 *                icon display effects (! for new item, lock symbol for locked item,
 *                outlines or overlays for rare, etc) and to enforce state behavior
 *                like binding, locked items, items that can be active or passive, etc.
 *
 */
export interface Lore {
  id: Guid;
  name: string;
  description: string;
  states: ItemState[];
}
