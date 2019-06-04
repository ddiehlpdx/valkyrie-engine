import { Guid } from 'node_modules/guid-typescript';


export interface ItemState {
  id: Guid;
  name: string;
  description: string;
  // TODO: Modifications of item icon and functionality
}
