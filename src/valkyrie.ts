import { Guid } from 'guid-typescript';
import { Ability } from './models/ability/Ability';
import { Action } from './models/action/Action';
import { Battlefield, Terrain, Tile } from './models/battlefield/Battlefield';
import { Player, Inventory, Squad } from './models/player/Player';
import { Item, Consumable, Equipment, ItemState } from './models/item/Item';
import { UIElement, Icon } from './models/uielement/UIElement';
import { Unit, Profession } from './models/unit/Unit';
import * as THREE from 'three';

export { Valkyrie as VE };
export default class Valkyrie {
  private static renderer: THREE.Renderer;
  private static scene: THREE.Scene;
  private static geometry: THREE.Geometry;
  private static material: THREE.Material;
  private static mesh: THREE.Mesh;
  private static camera: THREE.Camera;
  
  /**
   * 
   * @param params
   * 
   */
  private static init(params?: ValkyrieConfiguration): void {
    console.log('init fired');

    Valkyrie.scene = new THREE.Scene();
    Valkyrie.geometry = new THREE.IcosahedronGeometry(200, 1);
    Valkyrie.material = new THREE.MeshNormalMaterial({ wireframe: true, wireframeLinewidth: 2 });
    Valkyrie.mesh = new THREE.Mesh(Valkyrie.geometry, Valkyrie.material);

    Valkyrie.scene.add(Valkyrie.mesh);

    Valkyrie.renderer = new THREE.WebGLRenderer();
    Valkyrie.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(Valkyrie.renderer.domElement);

    Valkyrie.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    Valkyrie.camera.position.z = 500;

    Valkyrie.renderer.render(Valkyrie.scene, Valkyrie. camera);

    Valkyrie.animateScene();

    const text = new THREE.TextGeometry('Unit Name', {
      size: 30,
      height: 20,
      bevelEnabled: false
    });
    
    
  }

  private static animateScene(): void {
    requestAnimationFrame(Valkyrie.animateScene);

    Valkyrie.mesh.rotation.x = Date.now() * .0001;
    Valkyrie.mesh.rotation.y = Date.now() * .00015;

    Valkyrie.renderer.render(Valkyrie.scene, Valkyrie.camera);
  }

  private static loadBattlefield(battlefield: Battlefield): void {
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