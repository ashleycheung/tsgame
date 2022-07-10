

/**
 * Implements the observer pattern for events
 *
 * 
 * ```typescript
 *  const event = new EventManager()
 * 
 *  event.addEventListener("collisionStart", (event: GameEvent) => {
 *    console.log("Collision occured")
 *  })
 * ```
 */
export class EventManager {
  
  // Maps the event name to a map of the listener
  // to whether it is once or not
  private _listeners: Map<string, 
    Map<(event: GameEvent) => void, boolean>
  > = new Map();
  
  
  
  /**
   * Adds an event listener
   * @param eventName 
   * @param callback 
   * @param once - If set to true, the listener is automatically
   * removed after being called once
   */
  addEventlistener (
    eventName: string, callback: (event: GameEvent) => void,
    once : boolean = false
  ): void {
    const listenerSet = this._listeners.get(eventName)
    
    // Add listener to the set
    if (listenerSet === undefined) {
      this._listeners.set(eventName, new Map([[callback, once]]));
    } else {
      listenerSet.set(callback, once);
    }
  }
  
  // Calls the event
  callEvent (event: GameEvent): void {
    const listenerMap = this._listeners.get(event.name)
    if (listenerMap !== undefined) {
      listenerMap.forEach((once, callback) => {
        // Call the callback
        callback(event);
        // Remove from set if once
        if (once) {
          this.removeEventListener(event.name, callback);
        }
      })
    }
  }
  
  // Removes a listener
  removeEventListener (
    eventName: string, callback: (event: GameEvent) => void
  ): void {
    const listenerMap = this._listeners.get(eventName)
    if (listenerMap !== undefined) {
      listenerMap.delete(callback)
    }
  }
  
}



/**
 * The base class that represents a game event
 * @event
 */
export abstract class GameEvent {
  /**
    Event name
  */
  abstract name: string
}
