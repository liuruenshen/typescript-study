import 'events'

type IndexableObject = Record<string, unknown>

interface ReadyEventArgs {
  readyTime: number
}

interface StartEventArgs {
  jsonData: string
}

interface StopEventArgs {
  result: IndexableObject
}

interface EventHandlerArgs {
  ready: ReadyEventArgs
  start: StartEventArgs
  stop: StopEventArgs
}

export type EventHandlerEventNames = keyof EventHandlerArgs

export interface EventHandlerOnCallbackArgs<T extends EventHandlerEventNames> {
  data: EventHandlerArgs[T]
  id: number
}

type EventHandlerOnCallbackSignature = {
  [K in EventHandlerEventNames]: (args: EventHandlerOnCallbackArgs<K>) => void
}

type EventEmitterlListenerSignature = (
  args: EventHandlerArgs[EventHandlerEventNames]
) => void

export type AllEventHandlerOnCallbackArgs =
  EventHandlerOnCallbackArgs<EventHandlerEventNames>

export type EventHandlerCallbackListener = (
  args: AllEventHandlerOnCallbackArgs
) => void

export interface EventHandler {
  trigger: <T extends EventHandlerEventNames>(
    event: T,
    args: EventHandlerArgs[T]
  ) => void
  on: <T extends EventHandlerEventNames>(
    event: T,
    callback: EventHandlerOnCallbackSignature[T]
  ) => void
  once: EventHandler['on']
}

declare module 'events' {
  interface EventEmitter {
    on: (
      event: string,
      listener: EventEmitterlListenerSignature
    ) => void
  }
}
