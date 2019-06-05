import { Item } from './Item';

export abstract class Equipment extends Item {

  abstract create(props: object): Item;
}
