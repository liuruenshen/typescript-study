export type IndexableObject = Record<string, unknown>

export interface EventHandler {
  trigger: (event: string, args: IndexableObject) => void
  on: (
    event: string,
    callback: (args: IndexableObject) => void
  ) => void
}
