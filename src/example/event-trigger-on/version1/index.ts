import { EventEmitter } from 'events'
import { EventHandler } from './interface'

function getMyEventEmitter(): EventHandler {
  const emitter = new EventEmitter()
  const myEventEmitter: EventHandler = {
    trigger(event, args) {
      emitter.emit(event, args)
    },
    on(event, callback) {
      emitter.on(event, callback)
    },
  }

  return myEventEmitter
}

const myEmitter = getMyEventEmitter()

myEmitter.trigger('click', { test: 1 })
myEmitter.on('click', (args) => {
  console.log(args)
})
