import { Guid } from 'guid-typescript';
import { Ability } from './models/ability/Ability';
import { Action } from './models/action/Action';
import { Battlefield, Terrain, Tile } from './models/battlefield/Battlefield';
import { Player, Inventory, Squad } from './models/player/Player';
import { Item, Consumable, Equipment, ItemState } from './models/item/Item';
import { UIElement, Icon } from './models/uielement/UIElement';
import { Unit, Profession } from './models/unit/Unit';
import * as THREE from '../node_modules/three';

export { Valkyrie as VE };
export default abstract class Valkyrie {
  
  /**
   * 
   * @param params
   * 
   */
  public static init(params?: ValkyrieConfiguration): void {
    console.log('init fired');

    const scene = new THREE.Scene();
    const geometry = new THREE.IcosahedronGeometry(200, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, wireframeLinewidth: 2 });
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

  }

  public static loadBattlefield(battlefield: Battlefield): void {
    console.log('loadBattlefield fired');

  }
  
}

export interface ValkyrieConfiguration {
  windowWidth?: string | number,        // Width of game window; default window.innerWidth
  windowHeight?: string | number,       // Height of game window; default window.innerHeight
  // TODO: Add db params and functionality for projects made with builder.
}

export interface BattlefieldConfiguration {
  battlefield: Guid,        // Unique ID of battlefield to load
  squad?: Unit[],           // Player's squad; default player's currently set squad
  enemies?: Unit[],         // Enemy squad, default random selection by relative level
}