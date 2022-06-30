import * as PIXI from 'pixi.js';


export class Renderer {
  
  /**
    @ignore
  */
  _pixiApp: PIXI.Application;
  
  constructor () {
    this._pixiApp = new PIXI.Application();
  }
  
}