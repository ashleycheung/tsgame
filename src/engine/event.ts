
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
 *
 */
export class EventManager {
  
  // Maps the event name to its set of listeners
  private _listeners: Map<string, Set<(event: GameEvent) => void>> = new Map();
  
  // Adds a listener
  addEventlistener (
    eventName: string, callback: (event: GameEvent) => void
  ): void {
    const listenerSet = this._listeners.get(eventName)
    if (listenerSet === undefined) {
      this._listeners.set(eventName, new Set([callback]))
    } else {
      listenerSet.add(callback)
    }
  }
  
  // Calls the event
  callEvent (event: GameEvent): void {
    const listenerSet = this._listeners.get(event.name)
    if (listenerSet !== undefined) {
      listenerSet.forEach(c => c(event))
    }
  }
  
  // Removes a listener
  removeEventListener (
    eventName: string, callback: (event: GameEvent) => void
  ): void {
    const listenerSet = this._listeners.get(eventName)
    if (listenerSet !== undefined) {
      listenerSet.delete(callback)
    }
  }
  
}


/**
 * The base class that represents a game event
 */
export abstract class GameEvent {
  /**
    Event name
  */
  abstract name: string
}
