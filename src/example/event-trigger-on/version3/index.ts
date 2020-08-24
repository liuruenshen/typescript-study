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
    once(event, callback) {
      emitter.once(event, callback)
    },
  }

  return myEventEmitter
}

const myEmitter = getMyEventEmitter()

myEmitter.trigger('ready', { readyTime: 1 })
myEmitter.trigger('start', { jsonData: '' })

myEmitter.on('ready', (args) => {
  console.log(args.data.readyTime)
})
