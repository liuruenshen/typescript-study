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

type EventHandlerEventNames = keyof EventHandlerArgs

export interface EventHandler {
  trigger: <T extends EventHandlerEventNames>(
    event: T,
    args: EventHandlerArgs[T]
  ) => void
  on: <T extends EventHandlerEventNames>(
    event: T,
    callback: (args: EventHandlerArgs[T]) => void
  ) => void
}
