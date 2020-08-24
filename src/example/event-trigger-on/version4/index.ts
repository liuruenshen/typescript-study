// index.ts
import { EventEmitter } from 'events'
import {
  EventHandler,
  AllEventHandlerOnCallbackArgs,
  EventHandlerCallbackListener,
} from './interface'

function getMyEventEmitter(): EventHandler {
  const emitter = new EventEmitter()
  const myEventEmitter: EventHandler = {
    trigger(event, args) {
      emitter.emit(event, args)
    },
    on(event, callback) {
      emitter.on(event, function(args) {
        const newArgs: AllEventHandlerOnCallbackArgs = {
          data: args,
          id: 1,
        };
        (callback as EventHandlerCallbackListener)(newArgs)
      })
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
myEmitter.trigger('stop', { result: {} })

myEmitter.on('stop', (args) => {
  console.log(args.data.result)
})
