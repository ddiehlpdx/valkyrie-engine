import { Item } from './Item';

export abstract class Consumable extends Item {

  abstract create(props: object): Item;
}
